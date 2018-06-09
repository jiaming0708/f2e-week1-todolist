import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../core/task-status.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  status = TaskStatus;
  ngOnInit() {
  }
  constructor() { }

}
