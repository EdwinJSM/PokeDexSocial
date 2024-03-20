import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { Observable, catchError, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<any> {
  constructor(private pokemons: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    return this.pokemons.getPokemons(0, 1).pipe(
      switchMap((response: any) => {
        return this.pokemons.getPokemons(0, response.count).pipe(
          catchError(error => {
            return of('No data');
          })
        )
      })
    );
  }
}
