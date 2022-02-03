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
    return this.http.post(this.url+'register', user);
  }

  login(user: User){
    return this.http.post(this.url+'login', user);
  }

  getUser(token: string, email:string){
    return this.http.post(this.url+'user', {token,email});
  }

  addContact(name:string, phone:number, token: string, email:string){
    return this.http.post(this.url+'contacts', {name, phone, token, email});
  }
}
