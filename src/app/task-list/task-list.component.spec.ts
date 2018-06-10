import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StatusPipe } from '../core/status.pipe';
import { DataService } from '../core/data.service';
import { BehaviorSubject } from 'rxjs';
import { TaskStatus } from '../core/task-status.enum';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, StatusPipe],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', inject([DataService], (service: DataService) => {
    const expected = service.tasks.length;
    component.taskStatus = TaskStatus.All;
    component.reload$ = new BehaviorSubject<boolean>(false);
    component.reload$
      .subscribe(p => expect(p).toEqual(false));
    component.getTasks$
      .subscribe(tasks => {
        expect(expected).toEqual(tasks.length);
      });
  }));
});
