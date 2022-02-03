import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [];
  displayStyle = "none";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    var cookie = document.cookie.split('?');
    var token = cookie[0].split('=')[1];
    var email = cookie[1].split('=')[1];
    this.userService.getUser(token, email)
      .subscribe(
        (data:any) => {
          if (data.user)
            this.contacts = data.user.contacts;
        },
        error => console.error('Error', error),
      );
  }
}
