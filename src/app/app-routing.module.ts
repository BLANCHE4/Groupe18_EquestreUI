import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TachesComponent} from "./taches/taches.component";
import {NewTachesComponent} from "./new-taches/new-taches.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {MenuComponent} from "./menu/menu.component";
import {ChevauxComponent} from "./chevaux/chevaux.component";
import {PlanningsComponent} from "./plannings/plannings.component";
import {RepriseCoursComponent} from "./reprise-cours/reprise-cours.component";
import {UtilisateursComponent} from "./utilisateurs/utilisateurs.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes:Routes = [
  {path: '', component:LoginComponent},
  {path: 'taches', component:TachesComponent},
  {path: 'new-tache', component:NewTachesComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  /*{path: '', redirectTo:'login', pathMatch:'full'},*/
  {path: '', component:MenuComponent, children:[
      {path: 'dashboard', component:AccueilComponent},
      {path: 'dashboard/gestion-chevaux', component:ChevauxComponent},
      {path: 'dashboard/gestion-plannings', component:PlanningsComponent},
      {path: 'dashboard/reprise-cours', component:RepriseCoursComponent},
      {path: 'dashboard/gestion-utilisateurs', component:UtilisateursComponent},
      { path: '**', redirectTo: 'dashboard' },
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
