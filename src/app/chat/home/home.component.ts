import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = 'chats';
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  setUrl(url:string){
    this.url = url;
  }
}
