import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './componnents/loginComponent/login/login.component';
import { SignupComponent } from './componnents/signupComponent/signup/signup.component';

const  routes: Routes = [
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
     component: LoginComponent
  },
  {
    path: 'signup',
     component: SignupComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
