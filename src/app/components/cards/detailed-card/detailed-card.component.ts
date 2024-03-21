import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css']
})
export class DetailedCardComponent implements OnInit {
  @Input() data?:any
  pokemon: any;
  pokemonGottem: boolean = false;

  ngOnInit(): void {
    if(this.data !== null || this.data !== undefined)
    {
      this.pokemon = this.data
      console.log(this.pokemon)
      this.pokemonGottem = true
    }
  }
  getImageSource(): string {
    return  this.pokemon.sprites.front_default != null ? this.pokemon.sprites.front_default : './assets/Images/NotFound.jpg';
  }
}
