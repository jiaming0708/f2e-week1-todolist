import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../core/data.service';
import { StatusPipe } from '../core/status.pipe';
import { TaskStatus } from '../core/task-status.enum';
import { TaskListComponent } from './task-list.component';


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
    component.taskStatus = TaskStatus.All;
    component.reload$ = new BehaviorSubject<boolean>(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', inject([DataService], (service: DataService) => {
    const expected = service.tasks.length;
    component.getTasks$
      .subscribe(tasks => {
        expect(expected).toEqual(tasks.length);
      });
  }));

  it('should get data', inject([DataService], (service: DataService) => {
    component.getTasks$
      .subscribe(tasks => {
        expect(service.tasks.length).toEqual(tasks.length);
      });

    component.reload$.next(true);
  }));
});
