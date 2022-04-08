import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {

  @ViewChild(FormGroupDirective) authForm;

  isLoading = false;
  isLoginMode = true;

  loginForm: FormGroup;

  private unsubscribe$ = new Subject();

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onChangeMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    this.authService.login(this.loginForm.value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (response: boolean) => {
          this.isLoading = false;
          if (response) {
            this.snackBar.open('Authorization was successful!', 'Close', {duration: 5000, horizontalPosition: 'right'});
            this.router.navigate(['/currency']).then();
          } else {
            this.snackBar.open('Authorisation Error', 'Close', {duration: 5000, horizontalPosition: 'right'});
            this.loginForm.reset();
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
