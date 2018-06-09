import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
import { TaskStatus } from './task-status.enum';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: Task[], status: TaskStatus): number {
    if (!value) {
      return 0;
    }

    const isCompleted = status === TaskStatus.Completed;
    return value.filter(p => p.isCompleted === isCompleted).length;
  }

}
