import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  pokemon: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      let pokemonWithAbilities = response.pokemon
      pokemonWithAbilities.abilities = response.abilities
      this.pokemon = pokemonWithAbilities;
    });
  }

}
