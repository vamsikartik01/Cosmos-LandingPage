import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup.model';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public siteName: string = "Mars Home";
  public domain: string = "jamesbond.3dns.me"
  public username: string;
  public baseHref: string;
  public dataObj: Signup;
  public email: string = "";
  public name: string = "";

  constructor(private authService: AuthService, private router: Router){
    this.baseHref = this.router.url+"main/"

    this.authService.usernameEvent.subscribe(
      (name: string) => {
        this.username = name+", "
      }
    );       
  }

  ngOnInit(): void{
    this.authService.verify()
  }

  getAssetPath(asset: string): string {
    return `${this.baseHref}${asset}`;
  }
  
  contact(): void {
    this.dataObj.email = this.email
    this.dataObj.username = this.username
    this.authService.contact(this.dataObj)
  }
  demo(): void{
    window.location.href = 'https://jamesbond.3dns.me?demo=true';
  }
}
