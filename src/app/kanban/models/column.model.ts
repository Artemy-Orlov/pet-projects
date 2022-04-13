import { TaskModel } from './task.model';

export class ColumnModel {
  constructor(public name: string, public tasks: TaskModel[]) {}
}
