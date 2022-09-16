import { ActionReducerMap } from '@ngrx/store';

import authReducer, { AuthStore } from './auth.reducer';

export interface RootState {
  auth: AuthStore;
}

export const reducers: ActionReducerMap<RootState> = { auth: authReducer };
