import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { filter, toArray, find } from 'rxjs/operators';
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

  create(task: Task): Observable<number> {
    const inserTask = { ...task };
    inserTask.id = this.getMaxId();
    this.tasks.push(inserTask);
    return of(inserTask.id);
  }

  edit(task: Task): Observable<boolean> {
    const findTask = this.tasks.find(p => p.id === task.id);
    findTask.title = task.title;
    findTask.deadline = task.deadline;
    findTask.comment = task.comment;
    findTask.isFavorite = task.isFavorite;
    findTask.isCompleted = task.isCompleted;
    return of(true);
  }

  private getMaxId(): number {
    const maxId = Math.max(...this.tasks.map(p => p.id));
    return maxId + 1;
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
        deadline: '2018/06/08 20:00:00',
        openDetail: false
      },
      {
        id: 1,
        isCompleted: false,
        isFavorite: true,
        comment: '',
        files: [],
        title: 'Type Something Here baby!',
        deadline: '',
        openDetail: false
      }
    ];
  }
}
