import { TaskStatus } from './taskStatus';

export class ProgressStatus implements TaskStatus {
  color(): string {
    return 'yellow';
  }

  label(): string {
    return '進行中';
  }
}
