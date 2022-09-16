import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthModel } from 'src/app/model/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private authModel: AuthModel, private router: Router) {}

  ngOnInit(): void {
    this.authModel.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  handleLogin(type: 'google' | 'email') {
    if (type === 'email') this.router.navigateByUrl('/auth/email');
    if (type === 'google') this.authModel.loginGoogle();
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }
}
