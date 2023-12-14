import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData :{email :string, username: string, password: string} = {email: '', username: '',password: ''};
  status :string;

  submitForm() {
    this.status = "success"
  }
}
