import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<any> {
  constructor(private pokemons: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let name = route.paramMap.get('name');
    if (name !== null) {
      return this.pokemons.getMoreDataByName(name).pipe(
        catchError(error => {
          return of('No data');
        })
      );
    } else {
      return of('No data');
    }
  }
}
