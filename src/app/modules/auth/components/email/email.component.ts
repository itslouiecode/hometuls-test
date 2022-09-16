import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthModel } from 'src/app/model/auth.model';

interface EmailForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.sass'],
})
export class EmailComponent implements OnInit {
  public emailForm: FormGroup<EmailForm>;

  public loginError$ = this.authModel.loginError$;

  constructor(
    private formBuilder: FormBuilder,
    private authModel: AuthModel,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.authModel.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        this.router.navigateByUrl('/home');
      }
    });

    this.loginError$.subscribe((hasError) => {
      if (hasError) {
        this.emailForm.reset();
      }
    });
  }

  public getEmailErrorMessage(): string {
    const emailControl = this.emailForm.get('email');

    if (emailControl?.hasError('required')) {
      return 'Campo requerido';
    }

    return emailControl?.hasError('email') ? 'Email invalido' : '';
  }

  public onSubmit() {
    const { email, password } = this.emailForm.getRawValue();

    this.authModel.loginEmail({
      email: email ?? '',
      password: password ?? '',
    });
  }
}
