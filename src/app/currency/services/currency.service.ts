import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) {}

  getCurrencyRates(from: string, to: string): Observable<number>{
    return this.http.get<any>('assets/json/currency-rates.json').pipe(
      map(rates => {
        const targetRateList = rates.filter(item => item.base === from)[0];
        return targetRateList.rates[to];
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
