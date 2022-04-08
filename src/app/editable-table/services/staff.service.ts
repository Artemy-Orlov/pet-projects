import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PersonModel } from '../models/person.model';

@Injectable()
export class StaffService {

  constructor(private http: HttpClient) {}

  getStaff(): Observable<PersonModel[]>{
    return this.http.get<PersonModel[]>('assets/json/staff.json').pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
