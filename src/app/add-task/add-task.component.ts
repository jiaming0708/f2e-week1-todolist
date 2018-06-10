import { Component, OnInit } from '@angular/core';
import { Task } from '../core/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  task: Task;
  ngOnInit() {
  }

  editing() {
    this.task = {
      id: 0,
      isCompleted: false,
      isFavorite: false,
      comment: '',
      files: [],
      title: '',
      deadline: '',
      openDetail: true
    };
  }

  constructor() { }
}
