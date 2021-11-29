import { TaskResponse } from '../model/response/taskResponse';
import { Task } from '../model/task';
import { TaskStatus } from '../model/status/taskStatus';
import { YetStatus } from '../model/status/yetStatus';
import { ProgressStatus } from '../model/status/progressStatus';
import { DoneStatus } from '../model/status/doneStatus';
import { TaskBuilder } from './taskBuilder';

export class EditTaskBuilder implements TaskBuilder {
  data: TaskResponse

  constructor(data: TaskResponse) {
    this.data = data;
  }

  build(): Task {
    return new Task(this);
  }

  getId(): string {
    return this.data.id;
  }

  getTitle(): string {
    return this.data.title;
  }

  getStatus(): TaskStatus {
    if (this.data.status === 'yet') {
      return new YetStatus();
    } else if (this.data.status === 'progress') {
      return new ProgressStatus();
    } else if (this.data.status === 'done') {
      return new DoneStatus();
    }
    throw 'not found status';
  }
}
