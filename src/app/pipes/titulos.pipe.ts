import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulos'
})
export class TitulosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
