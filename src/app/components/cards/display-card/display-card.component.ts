import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor(private pokeapi:PokemonService) { }
  @Input() data?:any
  pokemon: any;
  pokemonGotten:boolean = false;
  ngOnInit(): void {
    if(this.data !== null || this.data !== undefined)
    {
      this.pokeapi.getMoreData(this.data.url).subscribe((data)=>{
        this.pokemon = data;
        this.pokemonGotten = true;
      })
    }
  }
}


