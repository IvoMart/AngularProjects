import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitaRepe'
})
export class QuitaRepePipe implements PipeTransform {

  /**
   * 
   * @param -
   * @param good 
   * @param bad
   * @param neutral
   * 
   */
   transform(value: any): any {
    return value.filter((value: { name: any; }, i: any , arr: any[])=> arr.findIndex((data: { name: any; }) => data.name === value.name) === i)
  }

}
