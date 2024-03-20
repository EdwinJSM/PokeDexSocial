import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/miscelaneos/not-found/not-found.component';
import { PokemonResolverService } from './services/pokemon-resolver.service';

const routes: Routes = [
{
  path: 'list',
  component: ListComponent,
  resolve: { pokemons: PokemonResolverService }
},
{
  path: 'details',
  component: DetailsComponent
},
{
  path: '',
  redirectTo: '/list',
  pathMatch: 'full',
},
{
  path: '**',
  component: NotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
