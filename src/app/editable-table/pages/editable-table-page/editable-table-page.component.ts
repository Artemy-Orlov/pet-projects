import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { StaffService } from '../../services/staff.service';
import { PersonModel } from '../../models/person.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editable-table-page',
  templateUrl: './editable-table-page.component.html'
})
export class EditableTablePageComponent implements OnInit {

  staff: PersonModel[] = [];
  person: PersonModel;

  constructor( private staffService: StaffService, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.staffService.getStaff()
      .pipe(take(1))
      .subscribe(
        (staff: PersonModel[]) => {
          this.staff = [...staff];
        }
      );
  }

  editItem(idx: number): void {
    this.person = {...this.staff[idx]};
  }

  addPersonToTable(person: PersonModel): void {
    if (person.id) {
      const idx = this.staff.findIndex(item => item.id === person.id);
      this.staff[idx] = {...person};
      this.staff = [...this.staff];
      this.snackBar.open('User successfully edited!', 'Close', {duration: 5000, horizontalPosition: 'right'});
    } else {
      if (this.staff.length < 10) {
        person.id = this.staff.length + 1;
        this.staff = [...this.staff, person];
        this.snackBar.open('Person added successfully!', 'Close', {duration: 5000, horizontalPosition: 'right'});
      } else {
        this.snackBar.open('Sorry, but staff list is full(', 'Close', {duration: 5000, horizontalPosition: 'right'});
      }
    }
  }

}
