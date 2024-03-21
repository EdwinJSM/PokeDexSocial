import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPokemonTypes } from 'src/app/utils/utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef | undefined;
  listaPokemons: any[] = [];
  searchTerm : string = '';
  listaToShow:any[] = [];
  showAmount:number = 20;
  filterTerm: number = -1;
  public scrollIndex= 0;
  types: any[] = getPokemonTypes()
  displayPokemons: any[] = [];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.listaPokemons = response.pokemons;
      this.listaToShow = this.listaPokemons
      this.displayPokemons = []
      this.showPokemons()
    });
  }

  filterType(index:number)
  {
    this.types.forEach((element,index) => {
      document.getElementById('type'+index)?.classList.remove('selected')
    });
    if(this.filterTerm == index)
    {
      this.filterTerm = -1
    }
    else{
      this.filterTerm = index
      document.getElementById('type'+index)?.classList.add('selected')
      this.searchTerm = '';
    }

    if(this.filterTerm !== -1)
    {
      this.scrollIndex = 0
      this.displayPokemons = []
      this.listaToShow = this.listaPokemons.filter((pokemon) => {
        for (const type of pokemon.types) {
          if (type.type.name === this.types[this.filterTerm].name) {
            return true;
          }
        }
        return false;
      })
      this.showPokemons()
    }
    else
    {
      this.scrollIndex = 0;
      this.listaToShow = this.listaPokemons;
      this.displayPokemons = []
      this.showPokemons()
    }

  }

  showPokemons()
  {
    this.scrollIndex += this.showAmount
    this.displayPokemons = [...this.displayPokemons, ...this.listaToShow.slice(this.scrollIndex - this.showAmount, this.scrollIndex)]
  }
  scrolltoTop()
  {
    const nativeElement= this.uiElement?.nativeElement
    nativeElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onScrollLoadData(){
    const nativeElement= this.uiElement?.nativeElement
    console.log()
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) + 10 >= nativeElement.scrollHeight  &&  this.displayPokemons.length <= this.listaPokemons.length){
      this.showPokemons()
    }
  }

  searchPokemon()
  {
    if(this.searchTerm !== '')
    {
      this.filterType(-1)
      this.scrollIndex = 0;
      this.displayPokemons = []
      this.listaToShow = this.listaPokemons.filter((x)=>x.name.includes(this.searchTerm))
      this.showPokemons()
    }
    else{
      this.scrollIndex = 0;
      this.displayPokemons = []
      this.listaToShow = this.listaPokemons
      this.showPokemons()
    }
  }
}

