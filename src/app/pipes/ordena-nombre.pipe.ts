import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenaNombre'
})
export class OrdenaNombrePipe implements PipeTransform {

  transform(value: any): any {
    return value.sort( (c:any ,d: any) => {
      if (c.name < d.name) 
      {
        return -1;
      }
      if (c.name > d.name) 
      {
        return 1;
      }
      return 0;
    } );
  }

}
