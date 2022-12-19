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
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { InputComponent } from './_components/input/input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckboxComponent } from './_components/checkbox/checkbox.component';
import { ButtonComponent } from './_components/button/button.component';
import { IconComponent } from './_components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonComponent } from './_components/submit-button/submit-button.component';
import { SelectComponent } from './_components/select/select.component';




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
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    IconComponent,
    SubmitButtonComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
