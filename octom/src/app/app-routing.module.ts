import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { FilesComponent } from './_pages/files/files.component';
import { LoginComponent } from './login/login.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
