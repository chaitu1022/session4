import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dummy'
})
export class DummyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
