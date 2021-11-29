import { TaskBuilder } from '../builder/taskBuilder';
import { TaskStatus } from './status/taskStatus';

export class Task {
  id: string
  title: string
  status: TaskStatus

  constructor(builder: TaskBuilder) {
    this.id = builder.getId()
    this.title = builder.getTitle();
    this.status = builder.getStatus();
  }
}
