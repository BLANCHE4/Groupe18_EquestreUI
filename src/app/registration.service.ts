import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8000/login", user)

  }

  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8000/registeruser", user)

  }

  handleError(error: Response){
    console.log("lalalalalalalala");
    return throwError(error);

  }
}
