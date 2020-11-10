import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TachesComponent } from './taches/taches.component';
import { NewTachesComponent } from './new-taches/new-taches.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthentificationService} from "../services/authentification.service";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MenuComponent } from './menu/menu.component';
import { ChevauxComponent } from './chevaux/chevaux.component';
import { PlanningsComponent } from './plannings/plannings.component';
import { RepriseCoursComponent } from './reprise-cours/reprise-cours.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TachesComponent,
    NewTachesComponent,
    ForgotPasswordComponent,
    MenuComponent,
    ChevauxComponent,
    PlanningsComponent,
    RepriseCoursComponent,
    UtilisateursComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
