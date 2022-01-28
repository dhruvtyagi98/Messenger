import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(data: User){
    let user = new User(data.name, data.email, data.phone, data.password, data.confirm_password);
    let confirm_password_error = user.confirmPassword;
    this.userService.register(user)
      .subscribe(
        data => console.log('User Registered', data),
        error => console.error('Error', error)
      )
  }

}
