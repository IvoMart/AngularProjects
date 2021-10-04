import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const buscaNombre = [];
    for ( const recorre of value ){
      if ( recorre.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
         buscaNombre.push(recorre);
      }
    }

    return buscaNombre;
  }

}
