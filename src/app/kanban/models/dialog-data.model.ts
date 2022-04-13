import { TaskModel } from './task.model';

export class DialogDataModel {
  constructor(
    public task: TaskModel,
    public nextStep?: string,
    public gotoNextColumn?: boolean
  ) {}
}
