import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  userData :{email :string, username: string, password: string} = {email: '', username: '',password: ''};
  status :string;

  submitForm() {
    this.status = "success"
  }
}
