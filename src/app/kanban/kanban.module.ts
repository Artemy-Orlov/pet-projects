import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { SharedModule } from '../shared/shared.module';
import { KanbanService } from './services/kanban.service';
import { TaskEditComponent } from './components/task-edit/task-edit.component';



@NgModule({
  declarations: [
    KanbanPageComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: KanbanPageComponent }]),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [KanbanService]
})
export class KanbanModule { }
