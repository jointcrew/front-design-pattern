import { Task } from '../model/task';
import { TaskStatus } from '../model/status/taskStatus';


export interface TaskBuilder {
  build(): Task

  getId(): string

  getTitle(): string

  getStatus(): TaskStatus
}
