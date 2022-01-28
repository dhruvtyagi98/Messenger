import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post(this.url+'register', {body:user, headers:{'Access-Control-Allow-Origin':'*'}});
  }

  login(user: User){
    return this.http.post(this.url+'login', {body:user, headers:{'Access-Control-Allow-Origin':'*'}});
  }
}
