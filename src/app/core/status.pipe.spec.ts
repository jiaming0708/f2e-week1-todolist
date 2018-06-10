import { StatusPipe } from './status.pipe';
import { Task } from './task';
import { TaskStatus } from './task-status.enum';

describe('WithoutCompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return length without completed', () => {
    const pipe = new StatusPipe();
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

    const expected = 1;
    const actual = pipe.transform(list, TaskStatus.All);

    expect(actual).toEqual(expected);
  });

  it('should return length only completed', () => {
    const pipe = new StatusPipe();
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

    const expected = 1;
    const actual = pipe.transform(list, TaskStatus.Completed);

    expect(actual).toEqual(expected);
  });

  it('should return 0 when list is null or undefined', () => {
    const pipe = new StatusPipe();
    const list: Task[] = undefined;

    const expected = 0;
    const actual = pipe.transform(list, TaskStatus.Completed);

    expect(actual).toEqual(expected);
  });
});
