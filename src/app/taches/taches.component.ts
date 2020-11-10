import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  public taches:any;
  constructor(public authService:AuthentificationService, private router:Router) { }

  ngOnInit() {
    this.authService.getTache()
      .subscribe(data=>{
          this.taches=data;
        },
        err=>{
          this.authService.logout();
          this.router.navigateByUrl("/login");
        });
  }

  onNewTask() {
    this.router.navigateByUrl('/new-tache');
  }

}
