import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './componnents/loginComponent/login/login.component';
import { SignupComponent } from './componnents/signupComponent/signup/signup.component';
import { ToDoContainerComponent } from './componnents/toDoContainer/to-do-container/to-do-container.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateSignupGuard } from './guards/can-deactivate-signup.guard';

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
     component: SignupComponent,
     canDeactivate: [CanDeactivateSignupGuard]
  },
  {
    path: 'todoList',
    component: ToDoContainerComponent,
    canActivate: [AuthGuard]
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
