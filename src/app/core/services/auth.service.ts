import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../models/user.model';

interface IAuthFormValue {
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

  userSbj: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(this.user);
  user$: Observable<UserModel> = this.userSbj.asObservable();

  isAuthenticatedSbj: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSbj.asObservable();

  login(formData: IAuthFormValue): Observable<boolean> {
    const isAuth = formData.email === this.user.login && formData.password === this.user.password;
    this.isAuthenticatedSbj.next(isAuth);
    return of(isAuth);
  }

  logout(): void {
    this.isAuthenticatedSbj.next(false);
  }
}
