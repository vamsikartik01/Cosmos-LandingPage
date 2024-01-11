import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  demo(): void{
    window.location.href = 'https://jamesbond.3dns.me?demo=true';
  }
}
