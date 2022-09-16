import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, EmailComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
