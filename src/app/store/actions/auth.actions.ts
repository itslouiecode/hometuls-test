import { createAction, props } from '@ngrx/store';

import { LoginBody } from 'src/app/core/interfaces/auth.interface';
import { User } from 'src/app/core/interfaces/user.interface';

export enum AuthActionTypes {
  REGISTER_EMAIL = '[AUTH REGISTER] Register user with email',
  LOGIN_EMAIL = '[AUTH LOGIN] Login with email',
  LOGIN_EMAIL_SUCCESS = '[AUTH LOGIN] Login with email SUCCESS',
  LOGIN_EMAIL_FAILED = '[AUTH LOGIN] Login with email FAILED',
  LOGIN_GOOGLE = '[AUTH LOGIN] Login with google',
  LOGIN_GOOGLE_SUCCESS = '[AUTH LOGIN] Login with google SUCCESS',
}

const loginEmail = createAction(AuthActionTypes.LOGIN_EMAIL, props<{ payload: LoginBody }>());

const loginEmailSuccess = createAction(
  AuthActionTypes.LOGIN_EMAIL_SUCCESS,
  props<{ payload: User }>(),
);
const loginEmailFailed = createAction(AuthActionTypes.LOGIN_EMAIL_FAILED);

const registerEmail = createAction(AuthActionTypes.REGISTER_EMAIL, props<{ payload: LoginBody }>());

const loginGoogle = createAction(AuthActionTypes.LOGIN_GOOGLE);
const loginGoogleSuccess = createAction(
  AuthActionTypes.LOGIN_GOOGLE_SUCCESS,
  props<{ payload: User }>(),
);

const authActions = {
  loginEmail,
  loginEmailSuccess,
  loginEmailFailed,
  loginGoogle,
  loginGoogleSuccess,
  registerEmail,
};

export default authActions;
