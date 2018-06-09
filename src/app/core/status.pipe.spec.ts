import { StatusPipe } from './status.pipe';
import { Status } from './status.enum';
import { Task } from './task';

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

    const expected = 1;
    const actual = pipe.transform(list, Status.All);

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

    const expected = 1;
    const actual = pipe.transform(list, Status.Completed);

    expect(actual).toEqual(expected);
  });

  it('should return 0 when list is null or undefined', () => {
    const pipe = new StatusPipe();
    const list: Task[] = undefined;

    const expected = 0;
    const actual = pipe.transform(list, Status.Completed);

    expect(actual).toEqual(expected);
  });
});
