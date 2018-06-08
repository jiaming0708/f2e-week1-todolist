import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;

  ngOnInit() {
  }

  toggleFavorite() {
    this.task.isFavorite = !this.task.isFavorite;
  }

  editing() {

  }
  constructor() { }

}
