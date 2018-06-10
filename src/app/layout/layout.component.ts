import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../core/task-status.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  status = TaskStatus;
  reload$: BehaviorSubject<boolean>;
  ngOnInit() {
    this.reload$ = new BehaviorSubject<boolean>(false);
  }

  selectedTabChange($event) {
    this.reload$.next(true);
  }
  constructor() { }

}
