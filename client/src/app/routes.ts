import { Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {UserprofileComponent} from './components/userprofile/userprofile.component';
import {LoginformComponent} from './components/loginform/loginform.component';
import {SignupformComponent} from './components/signupform/signupform.component';

import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login',  component: LoginformComponent },
    { path: 'signup',  component: SignupformComponent },
    { path: 'logout', redirectTo: '', canActivate: [ IsLoggedInService ]},
    { path: 'user',  component: UserprofileComponent, canActivate: [ IsLoggedInService ] },
    { path: '**', redirectTo: '' }
];
