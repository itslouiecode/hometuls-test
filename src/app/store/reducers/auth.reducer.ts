import { createReducer, on } from '@ngrx/store';

import { User } from 'src/app/core/interfaces/user.interface';
import authActions from '../actions/auth.actions';

export interface AuthStore {
  user?: User;
  hasError: boolean;
}

const initialState: AuthStore = {
  hasError: false,
};

const authReducer = createReducer(
  initialState,
  on(authActions.loginEmailSuccess, authActions.loginGoogleSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    hasError: false,
  })),
  on(authActions.loginEmailFailed, (state) => ({
    ...state,
    hasError: true,
  })),
);

export default authReducer;
