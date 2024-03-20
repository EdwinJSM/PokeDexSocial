import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef | undefined;
  listaPokemons: any[] = [];
  pokemonsShowed: any[] = []
  scrollIndex:number = 13;
  searchTerm :string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.listaPokemons = response.pokemons.results;
      this.pokemonsShowed = this.listaPokemons.slice(1,this.scrollIndex)
      console.log(this.pokemonsShowed)
    });
  }
  onScrollLoadData(){
    const nativeElement = this.uiElement?.nativeElement
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) + 10 >= nativeElement.scrollHeight  &&  this.pokemonsShowed.length !== this.listaPokemons.length){
      this.loadMore()
    }
  }

  loadMore()
  {
    this.scrollIndex += 13;
    this.pokemonsShowed = [...this.pokemonsShowed, ...this.listaPokemons.slice(this.scrollIndex - 13, this.scrollIndex)];
  }

}

