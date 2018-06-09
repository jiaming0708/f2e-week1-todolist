import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../core/status.enum';
import { DataService } from '../core/data.service';
import { Observable } from 'rxjs';
import { Task } from '../core/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskStatus: Status;
  getTasks$: Observable<Task[]>;

  ngOnInit() {
    this.getTasks$ = this.service.getTasks(this.taskStatus);
  }

  constructor(private service: DataService) { }
}
