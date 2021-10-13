import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenaApariencia'
})
export class OrdenaAparienciaPipe implements PipeTransform {
/**
 * Logica de orden: Mientras el nombre es por orden digito a digito mayor
 * elige la opción de ubicación posterior.
 */
  transform(value__: any): any {
    return value__.sort( (a: any,b: any) => {
      if (a.biography.alignment < b.biography.alignment) 
      {
        return -1;
      }
      if (a.biography.alignment > b.biography.alignment) 
      {
        return 1;
      }
      return 0;
    } );
  }

}
