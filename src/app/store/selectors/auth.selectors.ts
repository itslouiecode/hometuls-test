import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStore } from '../reducers/auth.reducer';

const authStateSelector = createFeatureSelector<AuthStore>('auth');

export const isUserLoggedSelector = createSelector(authStateSelector, (d) => !!d.user);
export const loginErrorSelector = createSelector(authStateSelector, (d) => d.hasError);
export const userSelector = createSelector(authStateSelector, (d) => d.user);
