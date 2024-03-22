import { Component, Input, OnInit } from '@angular/core';
import { getStatIcons } from 'src/app/utils/utils';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css']
})
export class DetailedCardComponent implements OnInit {
  @Input() data?:any
  pokemon: any;
  pokemonGottem: boolean = false;
  pokemonAbilityDesc: any[] = []
  pokemonStatIcons:any = getStatIcons()
  currentSpriteIndex: number = -1;
  spriteKeys: string[] = [
    "front_default",
    "back_default",
    "front_shiny",
    "back_shiny",
  ];
  currentSprite:string = '';
  ngOnInit(): void {
    if(this.data !== null || this.data !== undefined)
    {
      this.pokemon = this.data
      console.log(this.pokemon)
      this.pokemon.abilities.forEach((element:any,index:number) => {
        this.pokemonAbilityDesc.push(this.getAbilityDescription(index))
      });
      this.getImageSource()
      this.pokemonGottem = true
    }
  }
  getImageSource(): void {
    const sprites = this.pokemon.sprites;
    let nextSpriteIndex = this.currentSpriteIndex + 1;

    if (nextSpriteIndex >= this.spriteKeys.length) {
      nextSpriteIndex = 0;
    }

    const nextSpriteKey = this.spriteKeys[nextSpriteIndex];
    const nextSprite = sprites[nextSpriteKey];

    if (nextSprite != null) {
      this.currentSpriteIndex = nextSpriteIndex;
      this.currentSprite = nextSprite; // Update currentSprite property
    } else {
      this.currentSpriteIndex = nextSpriteIndex;
      this.currentSprite = './assets/Images/NotFound.jpg';
    }
  }
  getAbilityDescription(index:number): string
  {
    return this.pokemon.abilities[index].flavor_text_entries.find((x:any)=> x.language.name == 'en').flavor_text
  }
}
