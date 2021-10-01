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
}
