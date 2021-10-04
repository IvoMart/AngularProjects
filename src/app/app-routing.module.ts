import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'detalle/:id', component: DetallesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
