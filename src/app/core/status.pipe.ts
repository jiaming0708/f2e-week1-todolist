import { Pipe, PipeTransform } from '@angular/core';
import { Status } from './status.enum';
import { Task } from './task';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: Task[], status: Status): number {
    if (!value) {
      return 0;
    }

    const isCompleted = status === Status.Completed;
    return value.filter(p => p.isCompleted === isCompleted).length;
  }

}
