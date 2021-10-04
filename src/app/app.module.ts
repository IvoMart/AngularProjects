import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TitulosPipe } from './pipes/titulos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    TitulosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
