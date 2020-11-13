import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private host: string = "http://localhost:8080";
  private jwtToken: string;
  private roles: Array<any> = [];

  constructor(private http: HttpClient) {

  }

  login(user) {
    return this.http.post(this.host + "/login", user, { observe: 'response' });
  }

  register(user) {
    return this.http.post(this.host + "/register", user);
  }

  saveToken(jwtToken) {
    this.jwtToken = jwtToken;
    localStorage.setItem("token", jwtToken);
    let jwtHelper = new JwtHelperService;
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  saveTache(tache) {
    let headers = new HttpHeaders();
    headers.append('authorization', this.jwtToken);
    return this.http.post(this.host + "/tasks", tache, {
      headers: new
        HttpHeaders({ 'authorization': this.jwtToken })
    });
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('token'));
  }

  getTache() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/taches", {
      headers: new
        HttpHeaders({ 'authorization': this.jwtToken })
    });
  }

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    this.loadToken();
    for (let r of this.roles) {
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }
}
