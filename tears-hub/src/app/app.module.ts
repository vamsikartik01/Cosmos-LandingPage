import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { HomeComponent } from './site/home/home.component';
import { AuthComponent } from './site/auth/auth.component';
import { SignupComponent } from './site/auth/signup/signup.component';
import { SigninComponent } from './site/auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '',component: HomeComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HomeComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
