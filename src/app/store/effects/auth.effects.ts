import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import authActions from '../actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export default class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  userLoginEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginEmail),
      switchMap(({ payload }) => from(this.authService.login(payload))),
      map(({ user }) => {
        const { uid, createdAt, email, lastLoginAt } = user?.toJSON() as User;

        return authActions.loginEmailSuccess({ payload: { uid, createdAt, email, lastLoginAt } });
      }),
      catchError(() => of(authActions.loginEmailFailed())),
    ),
  );

  userLoginGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginGoogle),
      switchMap(() => from(this.authService.googleLogin())),
      map(({ user }) => {
        const { uid, createdAt, email, lastLoginAt } = user?.toJSON() as User;

        return authActions.loginGoogleSuccess({ payload: { uid, createdAt, email, lastLoginAt } });
      }),
    ),
  );
}
