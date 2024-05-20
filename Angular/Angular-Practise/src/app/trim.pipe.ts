import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true
})
export class TrimPipe implements PipeTransform {

  transform(value: String,value2:String) {
    let trimmedString = value.split(" ").join("");
    return trimmedString+value2;
  }

}
