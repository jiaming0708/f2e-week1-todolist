import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../core/data.service';
import { Observable, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { Task } from '../core/task';
import { TaskStatus } from '../core/task-status.enum';
import { mergeMap, map } from 'rxjs/operators';

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
    this.getTasks$ = combineLatest(
      this.service.getTasks(this.taskStatus),
      this.reload$
    ).pipe(
      map(p => p['0'])
    );
    // this.getTasks$ = this.service.getTasks(this.taskStatus);
  }

  save($event: Task) {
    this.service.edit($event)
      .subscribe(p => this.reload$.next(true));
  }

  create($event: Task) {
    this.service.create($event)
      .subscribe(p => this.reload$.next(true));
  }

  constructor(private service: DataService) { }
}
