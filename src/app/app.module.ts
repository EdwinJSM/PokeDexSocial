import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/miscelaneos/not-found/not-found.component';
import { DisplayCardComponent } from './components/cards/display-card/display-card.component';
import { DetailedCardComponent } from './components/cards/detailed-card/detailed-card.component';
import { PokemonService } from './services/pokemon.service';
import { CommentsBoxComponent } from './components/comments-box/comments-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    DisplayCardComponent,
    DetailedCardComponent,
    CommentsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
