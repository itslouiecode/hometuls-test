import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RootState } from '../store/reducers';
import authActions from '../store/actions/auth.actions';
import {
  isUserLoggedSelector,
  userSelector,
  loginErrorSelector,
} from '../store/selectors/auth.selectors';
import { LoginBody } from '../core/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthModel {
  public user$ = this.store.select(userSelector);

  public isUserLogged$ = this.store.select(isUserLoggedSelector);

  public loginError$ = this.store.select(loginErrorSelector);

  constructor(private store: Store<RootState>) {}

  loginGoogle() {
    this.store.dispatch(authActions.loginGoogle());
  }

  loginEmail(loginBody: LoginBody) {
    this.store.dispatch(authActions.loginEmail({ payload: loginBody }));
  }
}
