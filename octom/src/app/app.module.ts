import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { FilesComponent } from './_pages/files/files.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ActivityComponent,
    EbooksComponent,
    SettingsComponent,
    MessengerComponent,
    FilesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
