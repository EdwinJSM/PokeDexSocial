import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { Observable, catchError, forkJoin, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<any> {
  constructor(private pokemons: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.pokemons.getPokemons(0, 1).pipe(
      switchMap((response: any) => {
        const count = response.count;
        return this.pokemons.getPokemons(0, count).pipe(
          switchMap((detailedResponse: any) => {
            const pokemonUrls = detailedResponse.results.map((result: any) => result.url);
            const observables = pokemonUrls.map((url: string) => this.pokemons.getMoreData(url));

            return forkJoin(observables).pipe(
              catchError(error => {
                return of('No data');
              })
            );
          }),
          catchError(error => {
            return of('No data');
          })
        );
      }),
      catchError(error => {
        return of('No data');
      })
    );
  }
}
