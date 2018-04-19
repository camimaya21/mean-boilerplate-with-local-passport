import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  formInfo = {
    username: '',
    name: '',
    password: '',
    email: ''
  };
  constructor(public router: Router, private auth: AuthService) {}

  ngOnInit() {}

  signup() {
    const { username, name, email, password} = this.formInfo;
    if (username !== '' && password !== '') {
      this.auth
        .signup(username, name, email, password)
        .subscribe(
          (user) => {
            this.router.navigate(['/user']);
          }
        );
    } else {
      prompt('You must set a username and a password');
    }
  }
}
