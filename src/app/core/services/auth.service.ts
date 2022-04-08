import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';

interface AuthFormValue {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user: UserModel = {
    name: 'Artemy Orlov',
    position: 'Frontend developer',
    avatar: 'assets/img/avatar.png',
    login: environment.login,
    password: environment.password
  };

  userSbj: Subject<UserModel> = new Subject<UserModel>();
  user$: Observable<UserModel> = this.userSbj.asObservable();

  isAuthenticatedSbj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSbj.asObservable();

  login(formData: AuthFormValue): Observable<boolean> {
    const isAuth = formData.email === this.user.login && formData.password === this.user.password;
    this.isAuthenticatedSbj.next(isAuth);
    this.userSbj.next(this.user);
    return of(isAuth);
  }

  logout(): void {
    this.isAuthenticatedSbj.next(false);
    this.userSbj.next();
  }
}
