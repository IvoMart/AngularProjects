import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaApariencia'
})
export class BuscaAparienciaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
