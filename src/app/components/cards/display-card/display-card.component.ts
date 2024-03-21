import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor() { }
  @Input() data?:any
  pokemon: any;
  pokemonGottem: boolean = false;
  ngOnInit(): void {
    if(this.data !== null || this.data !== undefined)
    {
      this.pokemon = this.data
      this.pokemonGottem = true
    }
  }
}


