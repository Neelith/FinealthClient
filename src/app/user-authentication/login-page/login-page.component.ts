import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {

  constructor() {
  }

  onSubmit(form: FormGroup) {
    console.log(form.get('email')?.value);
  }
}
