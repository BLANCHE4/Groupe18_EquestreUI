import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registrerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        this._router.navigate(['/login'])
         console.log("response received");
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
        
      } 
    )

}
}
