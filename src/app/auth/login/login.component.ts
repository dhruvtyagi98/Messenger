import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Messenger | Login';

  constructor(private userService: UserService) { }

  onSubmit(data: User){
    let user = new User('',data.email,0 ,data.password, '');

    this.userService.login(user)
      .subscribe(
        data => console.log('User Registered', data),
        error => console.error('Error', error)
      )
  }
}
