import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Messenger | Login';

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  onSubmit(data: User){
    var route = this.route;
    let user = new User('',data.email,0 ,data.password, '');

    this.userService.login(user)
      .subscribe(
        (data:any) => {
          if (data.hasOwnProperty('token')) {
            document.cookie = "token="+data.token+"?email="+data.email;
            this.route.navigate(['home']);
          }
        },
        error => console.error('Error', error),
      )
  }
}
