import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarApariencia'
})
export class BuscarAparienciaPipe implements PipeTransform {

  transform(apar: any, arg: any): any {
    const buscaApariencia = [];
    for (const recorre of apar) {
      if (recorre.biography.alignment.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        buscaApariencia.push(recorre);
      }
    }

    return buscaApariencia;
  }
}