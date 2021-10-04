import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulos'
})
export class TitulosPipe implements PipeTransform {

  transform(value: string): string {
    let encabezado = value;

    return encabezado;

  }

}
