import { Component } from '@angular/core';
import { Signup } from 'src/app/models/signup.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData : Signup = {username: '', email: '',password: ''};
  rePassword: string;
  status :string;
  message :string;

  constructor(private authService: AuthService){
    this.authService.verifyEvent.subscribe(
      (verified: boolean) => {
        console.log("name", verified)
        if (verified) {
          console.log("true")
      window.location.href = 'https://jamesbond.3dns.me';
        }
      }
    );   
  }


  submitForm() {
    this.status = "please wait!"
    if (this.userData.email == "" || this.userData.username == "" || this.userData.password == "" ){
      this.status = "Failed, Required fields cannot be empty." 
    }else if (this.userData.password != this.rePassword) {
      this.status = "Failed, Passwords Doesn't match"
    } else{
      this.authService.signup(this.userData)
    }
    this.authService.statusEvent.subscribe(
      (status: boolean) => {
        console.log("status", status)
        if (status){
          this.status = "Success!"
        } else {
          this.status = "Failed!"
        }
      }
    );
    this.authService.messageEvent.subscribe(
      (message: string) => {
        console.log("status", message)
        this.message = message
      }
    );
  }
}
