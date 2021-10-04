import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenaNombre'
})
export class OrdenaNombrePipe implements PipeTransform {

  transform(value: any): any {
    return value.sort( (a: any,b: any) => {
      if (a.name < b.name) 
      {
        return -1;
      }
      if (a.name > b.name) 
      {
        return 1;
      }
      return 0;
    } );
  }

}
