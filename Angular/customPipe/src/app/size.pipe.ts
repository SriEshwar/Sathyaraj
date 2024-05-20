import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class SizePipe implements PipeTransform {

  // transform(value : number): String {
  //   if (value >= 36 && value < 38) {
  //     return 'Medium';
  //   } else if (value >= 38 && value < 42) {
  //     return 'Large';
  //   } else if (value >= 42) {
  //     return 'Extra Large';
  //   } else {
  //     return 'Null';
  //   }
  // }

  transform(name: string,gender:string) : string {
      if (gender.toLowerCase() === 'male') {
        return 'Mr. ' + name;
      } else if (gender.toLowerCase() === 'female') {
        return 'Mrs. ' + name;
      } else {
        return name;
      }
    }

}
