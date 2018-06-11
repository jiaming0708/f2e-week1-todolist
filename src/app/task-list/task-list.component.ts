import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DataService } from '../core/data.service';
import { Task } from '../core/task';
import { TaskStatus } from '../core/task-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskStatus: TaskStatus;
  @Input() reload$: BehaviorSubject<boolean>;
  getTasks$: Observable<Task[]>;

  ngOnInit() {
    this.getTasks$ = this.reload$
      .pipe(
        mergeMap(p => this.service.getTasks(this.taskStatus))
      );
  }

  save($event: Task) {
    this.service.edit($event)
      .subscribe(() => this.reload$.next(true));
  }

  create($event: Task) {
    this.service.create($event)
      .subscribe(() => this.reload$.next(true));
  }

  constructor(private service: DataService) { }
}
