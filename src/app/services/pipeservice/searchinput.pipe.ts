import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interface/products';

@Pipe({
  name: 'searchinput'
})
export class SearchinputPipe implements PipeTransform {

  transform(pruductsOfArray: Products[], searchTerm: string): Products[] {
    return pruductsOfArray.filter((productArray) =>
      productArray.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  /*

transform(pruductsOfArray:Products[] , searchTerm:string):Products[] {
    return pruductsOfArray.filter((prudectArrar)=>{
      prudectArrar.category.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
  */

}
