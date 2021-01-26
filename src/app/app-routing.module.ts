import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployesComponent } from './components/create-employes/create-employes.component';
import { ListEmployesComponent } from './components/list-employes/list-employes.component';


const routes: Routes = [
  //{path: '', component: ListEmployesComponent},
  {path: '', redirectTo:'empleados-lista', pathMatch: 'full'},
  { path: 'nuevo-empleado', component: CreateEmployesComponent },
  // Ver empleado para editarlo, con Id desde la Ruta
  {path: 'editar-empleado/:id', component: CreateEmployesComponent},
  {path: 'empleados-lista', component: ListEmployesComponent},
  {path: '**', redirectTo:'', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
