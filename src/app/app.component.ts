import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketing digital';
  titulo  = 'paquetes';
  fecha = new Date();
  precio1=150;
  precio2=250;
  precio3=450;
  mes = 'MES';
  paquetes = [
    {titulo: 'Basico', precio: 150, mes : 'mes', d1: '10 users included', d2:'2 GB of storage', d3:'Email suppor', d4:'-'},
    {titulo: 'Recomendado', precio: 250, mes : 'mes', d1: '20 users included', d2:'2 GB of storage', d3:'Email suppor', d4:'-'},
    {titulo: 'Avanzado', precio: 450, mes : 'mes', d1: '40 users included', d2:'2 GB of storage', d3:'Email suppor', d4:'algo más'}
   ] ;
}
