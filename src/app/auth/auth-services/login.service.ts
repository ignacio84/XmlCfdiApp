import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInterface } from 'src/app/interfaces/login.interface';
import { environment } from 'src/environments/environment';

const URL = environment.ENDPOINT;
const KEY_APP = environment.X_API_Key;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(login: LoginInterface): Observable<any> {
    const { username, password } = login;
    let headers = this.httpHeaders(username, password);
    return this.http.post(`${URL}/TokenResource.svc`, {}, { headers })
  }


  private httpHeaders(usr: string, pass: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-API-Key': KEY_APP,
      'username': usr,
      'password': pass
    });
  }
}
