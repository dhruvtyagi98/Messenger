import { Component } from '@angular/core';
import { ContactsComponent } from './chat/contacts/contacts.component';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Messenger';
  token = '';

  constructor(private userService: UserService) { }

  createContact(data:any){
    var cookie = document.cookie.split('?');
    var token = cookie[0].split('=')[1];
    var email = cookie[1].split('=')[1];
    this.userService.addContact(data.name, data.phone, token, email)
      .subscribe(
        data => console.log('Contact Added', data),
        error => console.error('Error', error)
      )
  }
}
