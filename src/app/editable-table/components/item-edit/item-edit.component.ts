import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonModel } from '../../models/person.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnChanges, OnInit, OnDestroy {

  @Input() personForEdit: PersonModel = null;
  @Output() personToTable = new EventEmitter<PersonModel>();

  personForm: FormGroup;
  editMode = false;
  private unsubscribe$ = new Subject();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.personForEdit && this.personForEdit.id) {
      this.editMode = true;
      this.formPatcher(this.personForEdit);
    }
  }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required])
    });
  }

  formPatcher(person: PersonModel): void {
    this.personForm.patchValue({
      ...person
    });
  }

  editPerson(): void {
    this.personToTable.emit(this.personForm.value);
    this.clearForm();
  }

  clearForm(): void {
    this.personForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
