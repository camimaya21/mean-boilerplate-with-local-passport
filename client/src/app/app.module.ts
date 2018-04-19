import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { SignupformComponent } from './components/signupform/signupform.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
