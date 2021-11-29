import { TaskStatus } from './taskStatus';

export class DoneStatus implements TaskStatus {
  color(): string {
    return 'green';
  }

  label(): string {
    return '完了';
  }
}
