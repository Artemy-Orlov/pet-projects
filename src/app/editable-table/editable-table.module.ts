import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditableTablePageComponent } from './pages/editable-table-page/editable-table-page.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { StaffService } from './services/staff.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    EditableTablePageComponent,
    ItemEditComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: EditableTablePageComponent }]),
    SharedModule
  ],
  providers: [StaffService, MatDatepickerModule]
})
export class EditableTableModule { }
