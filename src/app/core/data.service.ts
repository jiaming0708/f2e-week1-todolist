import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { Task } from './task';
import { TaskStatus } from './task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];
  getTasks(status: TaskStatus): Observable<Task[]> {
    return from(this.tasks)
      .pipe(
      filter(p => {
        switch (status) {
          case TaskStatus.All:
            return true;
          case TaskStatus.Completed:
            return p.isCompleted;
          case TaskStatus.InProgress:
            return !p.isCompleted;
        }
      }),
        toArray()
      );
  }

  constructor() {
    this.tasks = [
      {
        id: 0,
        isCompleted: true,
        isFavorite: true,
        comment: 'test',
        files: [],
        title: 'Type Something Here baby!',
        deadline: '2018/06/08 20:00:00'
      },
      {
        id: 0,
        isCompleted: false,
        isFavorite: true,
        comment: 'test',
        files: [],
        title: 'Type Something Here baby!',
        deadline: '2018/06/08 20:00:00'
      }
    ];
  }
}
