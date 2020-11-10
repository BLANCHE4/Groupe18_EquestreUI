import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;
  mode:number=0;
  errorMessage:string;

  constructor(private authService: AuthentificationService, private router:Router) { }

  ngOnInit() {
  }

  onRegister(user){
    this.authService.register(user)
      .subscribe(data=>{
          this.user=data;
          this.mode=1;
          this.router.navigateByUrl("")
        },
        err=>{
          this.errorMessage=err.error.message;
          this.mode=0;
        })
  }

}
