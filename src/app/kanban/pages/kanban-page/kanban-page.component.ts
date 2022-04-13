import { Component, OnDestroy, OnInit } from '@angular/core';
import { KanbanService } from '../../services/kanban.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardModel } from '../../models/board.model';
import { TaskModel } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../../components/task-edit/task-edit.component';
import { DialogDataModel } from '../../models/dialog-data.model';

@Component({
  selector: 'app-kanban-page',
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent implements OnInit, OnDestroy {

  kanban: BoardModel;
  private unsubscribe$ = new Subject();

  constructor(private kanbanService: KanbanService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.kanbanService.kanbanData$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (kanbanData: BoardModel) => {
          this.kanban = kanbanData;
        }
      );
  }

  openEditDialog(task?: TaskModel, iTask?: number, iColumn?: number, nextStep?: string): void {
    let dialogData: DialogDataModel = null;

    if (task) {
      dialogData = new DialogDataModel(task, nextStep);
    }

    const dialogRef = this.dialog.open(TaskEditComponent, {
      data: dialogData,
      width: '500px',
      panelClass: 'kanban-task-dialog',
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: DialogDataModel | undefined) => {
          if (result) {
            if (!isNaN(iColumn)) {
              this.kanban.columns[iColumn].tasks[iTask] = {...result.task};
              if ( result.gotoNextColumn ) {
                this.kanban.columns[iColumn + 1].tasks.push(this.kanban.columns[iColumn].tasks.splice(iTask, 1)[0]);
              }
            } else {
              this.kanban.columns[0].tasks.push({...result.task});
            }
            this.kanbanService.kanbanDataSbj.next(this.kanban);
          }
        });
  }

  drop(event: CdkDragDrop<TaskModel[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.kanbanService.kanbanDataSbj.next(this.kanban);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
