/*
 Taken from https://stackoverflow.com/questions/38554562/how-can-i-use-ngfor-to-iterate-over-typescript-enum-as-an-array-of-strings
* */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipePipe implements PipeTransform {

  transform(data: Object) {
    return Object.keys(data);
  }

}
