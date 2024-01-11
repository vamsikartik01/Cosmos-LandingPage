import { HttpClient } from "@angular/common/http"
import { Signup } from "../models/signup.model"
import { EventEmitter, Injectable } from "@angular/core";
import { Signin } from "../models/signin.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //private url: string = "http://localhost:2200"
    private url: string = "https://jamesbond.3dns.me/auth"

    private signupObj: Signup;
    public username: string = "";
    public isVerified: boolean = false;
    public isContacted: boolean = false;
    public statusEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    public verifyEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    public usernameEvent: EventEmitter<string> = new EventEmitter<string>();
    public messageEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private http: HttpClient){}

    signup(Obj: Signup){
        let destination: string = this.url+"/v1/signup"
        this.http.post(destination, Obj).subscribe(
            (responseData: any) => {
                if (responseData.status=="Success"){
                    this.statusEvent.emit(true)
                } else {
                    this.statusEvent.emit(false)
                }
                this.messageEvent.emit(responseData.message)
            }
        )
    }

    signin(Obj: Signin){
        let destination: string = this.url+"/v1/signin"
        this.http.post(destination, Obj).subscribe(
            (responseData: any) => {
                if (responseData.status=="Success"){
                    this.statusEvent.emit(true)
                } else {
                    this.statusEvent.emit(false)
                }
                this.messageEvent.emit(responseData.message)
            }
        )
    }

    verify(){
        let destination: string = this.url+"/v1/verify"
        this.http.get(destination).subscribe(
            (responseData: any) => {
                if (responseData.status=="Success"){
                    this.isVerified = true
                    this.username = responseData.message
                } else {
                    this.isVerified = false
                    this.username = ""
                }
                this.usernameEvent.emit(this.username)
                this.verifyEvent.emit(this.isVerified)
            }
        )
    }

    contact(Obj: Signup){
        let destination: string = this.url+"/v1/contact"
        this.http.post(destination, Obj).subscribe(
            (responseData: any) => {
                if (responseData.status=="Success"){
                    this.isContacted = true
                    alert("Thanks! We will contact you in 24 hours")
                } else {
                    this.isContacted = false
                    alert("Oops! Please try again later")
                }
                this.verifyEvent.emit(this.isVerified)
            }
        )
    }
}