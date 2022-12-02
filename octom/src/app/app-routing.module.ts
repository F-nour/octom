import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { FilesComponent } from './_pages/files/files.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const parentTitle = 'Octom - '

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'dashboard'

  },
  {
    path: 'activity',
    component: ActivityComponent,
    title: parentTitle + 'activity'
  },
  {
    path: 'ebooks',
    component: EbooksComponent
  },
  {
    path:'settings',
    component: SettingsComponent,
    title: parentTitle + 'settings'
  },
  {
    path:'messenger',
    component: MessengerComponent,
    title: parentTitle + 'messenger'
  },
  {
    path:'files',
    component: FilesComponent,
    title: parentTitle + 'files'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: parentTitle + 'authentification'
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: parentTitle + 'registration'
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: parentTitle + 'forgot password'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
