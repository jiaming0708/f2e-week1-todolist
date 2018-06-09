import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { Status } from './status.enum';
import { of } from 'rxjs';
import { Task } from './task';

describe('DataService', () => {
  const list: Task[] = [
    {
      id: 0,
      isCompleted: true,
      isFavorite: true,
      comment: 'test',
      files: [],
      title: 'Type Something Here baby!',
      deadline: '2018/06/08 20:00:00'
    },
    {
      id: 0,
      isCompleted: false,
      isFavorite: true,
      comment: 'test',
      files: [],
      title: 'Type Something Here baby!',
      deadline: '2018/06/08 20:00:00'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all task', inject([DataService], (service: DataService) => {
    spyOnProperty(service, 'tasks', 'get').and.returnValue(list);

    service.getTasks(Status.All)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(1);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(1);
      });
  }));

  it('should get only inprogress', inject([DataService], (service: DataService) => {
    spyOnProperty(service, 'tasks', 'get').and.returnValue(list);

    service.getTasks(Status.InProgress)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(1);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(0);
      });
  }));

  it('should get only completed', inject([DataService], (service: DataService) => {
    spyOnProperty(service, 'tasks', 'get').and.returnValue(list);

    service.getTasks(Status.Completed)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(0);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(1);
      });
  }));
});
