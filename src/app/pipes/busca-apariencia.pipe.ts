import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarApariencia'
})
export class BuscarAparienciaPipe implements PipeTransform {

  transform(value1: any, arg_: any): any {
    const buscaApariencia = [];
    for ( const hr of value1 ){
      if ( hr.biography.alignment.toLowerCase().indexOf(arg_.toLowerCase()) > -1 ) {
         buscaApariencia.push(hr);
      }
    }

    return buscaApariencia;
  }
}