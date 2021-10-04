import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitaRepeApar'
})
export class QuitaRepeAparPipe implements PipeTransform {
  /**
   * 
   * @param -
   * @param good 
   * @param bad
   * @param neutral
   * 
   */
  transform(value_: any): any {
    return value_.filter((value_: { biography: { alignment: any; }; }, i: any , arr: any[])=> arr.findIndex((data) => data.biography.alignment === value_.biography.alignment) === i)
  }

}
