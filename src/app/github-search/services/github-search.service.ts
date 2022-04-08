import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class GithubSearchService {

  private apiURL = environment.gitHubAPI;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/vnd.github.mercy-preview+json'
    }),
    params: {
      q: '',
      sort: 'start',
      order: 'desc',
      per_page: '9',
      page: '1'
    }
  };

  constructor(private http: HttpClient) {}

  getRepos(search: string, page: number): Observable<any> {
    this.httpOptions.params.q = search;
    this.httpOptions.params.page = page.toString();
    return this.http.get<any>(this.apiURL, this.httpOptions).pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
