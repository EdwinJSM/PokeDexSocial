import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {
  }

  getPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getMoreData(url: string): Observable<any> {
    return this.http.get(url);
  }

  getMoreDataByName(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getAbilities(url: string): Observable<any> {
    return this.http.get(url);
  }
}
