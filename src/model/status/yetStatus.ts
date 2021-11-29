import { TaskStatus } from './taskStatus';

export class YetStatus implements TaskStatus {
  color(): string {
    return 'red';
  }

  label(): string {
    return '未着手';
  }
}
