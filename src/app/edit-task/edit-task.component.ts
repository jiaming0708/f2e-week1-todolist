import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../core/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;
  @Input() mode: 'create' | 'edit';

  ngOnInit() {
  }

  toggleFavorite() {
    this.task.isFavorite = !this.task.isFavorite;
  }

  toggleDetail() {
    this.task.openDetail = !this.task.openDetail;
  }
  constructor() { }

}
