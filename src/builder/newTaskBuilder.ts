import { Task } from '../model/task';
import { TaskStatus } from '../model/status/taskStatus';
import { YetStatus } from '../model/status/yetStatus';
import { TaskBuilder } from './taskBuilder';

export class NewTaskBuilder implements TaskBuilder {
  build(): Task {
    return new Task(this);
  }

  getId(): string {
    return '';
  }

  getTitle(): string {
    return '未入力';
  }

  getStatus(): TaskStatus {
      return new YetStatus();
  }
}
