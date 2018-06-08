import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  task: Task;
  ngOnInit() {
    this.task = {
      id: 0,
      isCompleted: true,
      isFavorite: true,
      comment: 'test',
      files: [],
      title: 'Type Something Here baby!',
      deadline: '2018/06/08 20:00:00'
    };
  }
}
