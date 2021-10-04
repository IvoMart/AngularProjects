import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TitulosPipe } from './pipes/titulos.pipe';
import { OrdenaAparienciaPipe } from './pipes/ordena-apariencia.pipe';
import { OrdenaNombrePipe } from './pipes/ordena-nombre.pipe';
import { BuscarNombrePipe } from './pipes/busca-nombre.pipe';
import { BuscarAparienciaPipe } from './pipes/busca-apariencia.pipe';
import { FormsModule } from '@angular/forms';
import { QuitaRepePipe } from './pipes/quita-repe.pipe';
import { QuitaRepeAparPipe } from './pipes/quita-repe-apar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    TitulosPipe,
    OrdenaAparienciaPipe,
    OrdenaNombrePipe,
    BuscarNombrePipe,
    BuscarAparienciaPipe,
    QuitaRepePipe,
    QuitaRepeAparPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
