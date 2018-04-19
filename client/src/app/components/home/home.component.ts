import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: object;

  constructor( public auth: AuthService ) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe( user => this.user = user);
   }

  ngOnInit() {
  }

}
