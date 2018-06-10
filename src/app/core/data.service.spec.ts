import { inject, TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Task } from './task';
import { TaskStatus } from './task-status.enum';

describe('DataService', () => {
  const list: Task[] = [
    {
      id: 0,
      isCompleted: true,
      isFavorite: true,
      comment: 'test',
      files: [],
      title: 'Type Something Here baby!',
      deadline: '2018/06/08 20:00:00',
      openDetail: false
    },
    {
      id: 0,
      isCompleted: false,
      isFavorite: true,
      comment: 'test',
      files: [],
      title: 'Type Something Here baby!',
      deadline: '2018/06/08 20:00:00',
      openDetail: false
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
    service.tasks = list;

    service.getTasks(TaskStatus.All)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(1);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(1);
      });
  }));

  it('should get only inprogress', inject([DataService], (service: DataService) => {
    service.tasks = list;

    service.getTasks(TaskStatus.InProgress)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(1);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(0);
      });
  }));

  it('should get only completed', inject([DataService], (service: DataService) => {
    service.tasks = list;

    service.getTasks(TaskStatus.Completed)
      .subscribe(tasks => {
        let actual = tasks.filter(p => !p.isCompleted).length;
        expect(actual).toEqual(0);
        actual = tasks.filter(p => !!p.isCompleted).length;
        expect(actual).toEqual(1);
      });
  }));

  it('should push a data to list', inject([DataService], (service: DataService) => {
    const beforeCount = service.tasks.length;
    const expected = {
      id: 0,
      isCompleted: true,
      isFavorite: true,
      comment: 'jimmy comment',
      files: [],
      title: 'jimmy test',
      deadline: '',
      openDetail: false
    } as Task;
    service.create(expected).subscribe(p => {
      const afterCount = service.tasks.length;
      expect(afterCount).toEqual(beforeCount + 1);
      const actual = service.tasks.find(t => t.id === p);
      expect(actual.title).toEqual(expected.title);
      expect(actual.comment).toEqual(expected.comment);
    });
  }));

  it('should update a data', inject([DataService], (service: DataService) => {
    const beforeCount = service.tasks.length;
    const expected = {
      id: 1,
      isCompleted: true,
      isFavorite: true,
      comment: 'jimmy comment',
      files: [],
      title: 'jimmy test',
      deadline: '',
      openDetail: false
    } as Task;
    service.edit(expected).subscribe(p => {
      const afterCount = service.tasks.length;
      expect(afterCount).toEqual(beforeCount);

      const actual = service.tasks.find(t => t.id === expected.id);
      expect(actual.title).toEqual(expected.title);
      expect(actual.comment).toEqual(expected.comment);
    });
  }));

  it('should get new tasks after push', inject([DataService], (service: DataService) => {
    const expected = {
      id: 2,
      isCompleted: true,
      isFavorite: true,
      comment: 'jimmy comment',
      files: [],
      title: 'jimmy test',
      deadline: '',
      openDetail: false
    } as Task;

    service.tasks.push(expected);
    service.getTasks(TaskStatus.All)
      .subscribe(tasks => {
        const actual = tasks.find(p => p.id === expected.id);
        expect(actual).toEqual(expected);
      });
  }));
});
