import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(price:number , Quantity:number ): number {
    return price  * Quantity;
  }

}
