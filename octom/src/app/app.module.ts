import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {ActivityModule} from './activity/activity.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {EbooksModule} from './ebooks/ebooks.module';
import {MessengerModule} from './messenger/messenger.module';
import {SettingsModule} from './settings/settings.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    ActivityModule,
    DashboardModule,
    EbooksModule,
    MessengerModule,
    SettingsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
