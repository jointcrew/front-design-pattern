import { TaskStatus } from './taskStatus';

export class YetStatus implements TaskStatus {
  color(): string {
    return 'red';
  }

  label(): string {
    return 'ĉŞçĉ';
  }
}
