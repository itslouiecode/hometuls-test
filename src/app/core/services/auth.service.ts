import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { LoginBody } from 'src/app/core/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  login({ email, password }: LoginBody) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  googleLogin() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider());
  }

  register({ email, password }: LoginBody) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.signOut();
  }
}
