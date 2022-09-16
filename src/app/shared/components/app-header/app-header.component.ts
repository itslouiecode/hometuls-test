import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/interfaces/user.interface';
import { AuthModel } from 'src/app/model/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass'],
})
export class AppHeaderComponent implements OnInit {
  public user: User;

  constructor(private authModel: AuthModel, private router: Router) {}

  ngOnInit(): void {
    this.authModel.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  handleProfileClick() {
    if (this.user) {
      this.router.navigateByUrl('/auth/profile');
    } else {
      this.router.navigateByUrl('/auth/login');
    }
  }

  handleLogoClick() {
    this.router.navigateByUrl('/home');
  }
}
