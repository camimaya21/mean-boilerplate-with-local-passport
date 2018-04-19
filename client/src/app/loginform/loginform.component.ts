import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo: LoginForm = {
    username: '',
    password: ''
  };

  constructor(public router: Router, private auth: AuthService, public route: ActivatedRoute) {}

  ngOnInit() {}

  login() {
    const { username, password } = this.formInfo;
    if (username !== '' && password !== '') {
      this.auth
        .login(username, password)
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
