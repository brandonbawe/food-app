import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCFA'
})
export class ToCFAPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
