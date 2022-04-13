import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from '../../models/task.model';
import { DialogDataModel } from '../../models/dialog-data.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskForm: FormGroup;
  editMode = false;

  constructor(
    private dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {
  }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      comment: new FormControl('')
    });
    if (this.data) {
      this.editMode = true;
      this.formPatcher(this.data.task);
    }
  }

  formPatcher(task: TaskModel): void {
    this.taskForm.patchValue({
      ...task
    });
  }

  save(gotoNextColumn: boolean): void {
    if (this.data) {
      this.data.task = this.taskForm.value;
      this.data.gotoNextColumn = gotoNextColumn;
    } else {
      this.data = {
        task: this.taskForm.value
      };
    }

    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
