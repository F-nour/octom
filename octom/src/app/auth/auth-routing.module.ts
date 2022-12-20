import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Octom - login' },
  { path: 'register', component: RegisterComponent, title: 'Octom - register' },
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Octom - password forgotten' },

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
