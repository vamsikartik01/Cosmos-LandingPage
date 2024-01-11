import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  userData :{email :string, username: string, password: string} = {email: '', username: '',password: ''};
  status :string;
  message: string;

  constructor(private authService: AuthService){
    if (this.authService.isVerified) {
      window.location.href = 'https://jamesbond.3dns.me';
    }
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
    this.message = ""
    if (this.userData.email == "" || this.userData.password == "" ){
      this.status = "Failed, Required fields cannot be empty." 
    } else{
      this.authService.signin(this.userData)
    }
    this.authService.statusEvent.subscribe(
      (status: boolean) => {
        console.log("status", status)
        if (status){
          this.status = "Success!"
          setTimeout(()=>{
            window.location.href = "https://jamesbond.3dns.me";
          },3000)
        } else {
          this.status = "Failed!"
        }
      }
    );
    this.authService.messageEvent.subscribe(
      (message: string) => {
        console.log("status", message)
        this.message = message
        if (this.status == "Success!") {
          this.message = this.message + "Redirect to dashboard!"
        }
          
      }
    );
  }
}
