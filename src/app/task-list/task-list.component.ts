import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../core/data.service';
import { Observable } from 'rxjs';
import { Task } from '../core/task';
import { TaskStatus } from '../core/task-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskStatus: TaskStatus;
  getTasks$: Observable<Task[]>;

  ngOnInit() {
    this.getTasks$ = this.service.getTasks(this.taskStatus);
  }

  constructor(private service: DataService) { }
}
