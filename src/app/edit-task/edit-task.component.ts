import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Task } from '../core/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;
  @Input() mode: 'create' | 'edit';
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  ngOnInit() {
  }

  toggleFavorite() {
    this.task.isFavorite = !this.task.isFavorite;
  }

  toggleDetail() {
    this.task.openDetail = !this.task.openDetail;
  }

  cancelEdit() {
    this.task.openDetail = false;
    this.cancel.emit();
  }
  saveEdit() {
    this.task.openDetail = false;
    this.save.emit(this.task);
  }
  constructor() { }

}
