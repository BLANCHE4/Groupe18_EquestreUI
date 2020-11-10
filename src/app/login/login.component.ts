import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0;

  constructor(private authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
    let token=this.authService.loadToken();
    if(token)
      this.router.navigateByUrl("/dashboard");
  }

  onLogin(user){
      this.authService.login(user)
        .subscribe(resp=>{
            let jwtToken=resp.headers.get('authorization');
            //console.log(jwtToken);
            this.authService.saveToken(jwtToken);
            this.router.navigateByUrl("/dashboard");
          },
          err=>{
            this.mode=1;
          });
  }

  onRegister(){
    this.router.navigateByUrl("/register");
  }

  onForgotPassword(){
    this.router.navigateByUrl("/forgot-password");
  }
}
