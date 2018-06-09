import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  task: Task;
  ngOnInit() {
    this.matIconRegistry.registerFontClassAlias('fas', 'fas');
    this.matIconRegistry.registerFontClassAlias('far', 'far');

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
  constructor(private matIconRegistry: MatIconRegistry) {}
}
