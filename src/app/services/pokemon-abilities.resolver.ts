import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonAbilitiesResolver implements Resolve<any> {
  constructor(private pokemons: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let name = route.paramMap.get('name');
    if (name) {
      return this.pokemons.getMoreDataByName(name).pipe(
        switchMap((detailedResponse: any) => {
          const abilitiesUrls = detailedResponse.abilities.map((ability: any) => ability.ability.url);
          const observables = abilitiesUrls.map((url: string) => this.pokemons.getAbilities(url));
          return forkJoin(observables).pipe(
            catchError(error => {
              console.error('Error fetching abilities:', error);
              return of('No data');
            })
          );
        }),
        catchError(error => {
          console.error('Error fetching Pokemon details:', error);
          return of('No data');
        })
      );
    } else {
      console.error('No Pokemon name provided');
      return of('No data');
    }
  }
}
