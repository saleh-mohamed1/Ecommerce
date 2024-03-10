import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(text:string): string {
    return text.split(' ').splice(0,2).join(' ');
  }

}
