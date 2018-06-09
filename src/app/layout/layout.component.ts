import { Component, OnInit } from '@angular/core';
import { Status } from '../core/status.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  status = Status;
  ngOnInit() {
    console.log(this.status);
  }
  constructor() { }

}
