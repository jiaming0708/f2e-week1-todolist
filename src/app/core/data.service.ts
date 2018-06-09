import { Injectable } from '@angular/core';
import { Status } from './status.enum';
import { Observable, of, from } from 'rxjs';
import { map, filter, toArray } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _tasks: Task[];
  public get tasks(): Task[] {
    return this._tasks;
  }
  public set tasks(value: Task[]) {
    this._tasks = value;
  }
  getTasks(status: Status): Observable<Task[]> {
    return from(this.tasks)
      .pipe(
      filter(p => {
        switch (status) {
          case Status.All:
            return true;
          case Status.Completed:
            return p.isCompleted;
          case Status.InProgress:
            return !p.isCompleted;
        }
      }),
        toArray()
      );
  }

  constructor() {
    this.tasks = [];
  }
}
