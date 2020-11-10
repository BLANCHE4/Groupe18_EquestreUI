import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public taches:any;
  currentUser: any;
  constructor(public authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.authService.getTache()
      .subscribe(data=>{
          this.taches=data;
        },
        err=>{
          this.authService.logout();
          this.router.navigateByUrl("");
        });

  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl("")
  }

}
