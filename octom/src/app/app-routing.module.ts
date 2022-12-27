import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EbooksComponent} from './ebooks/ebooks.component';
import {FilesComponent} from './files/files.component';
import {MessengerComponent} from './messenger/messenger.component';
import {SettingsComponent} from './settings/settings.component';

const parentTitle = 'Octom - '

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent, title: 'dashboard' },
	{ path: 'activity', component: ActivityComponent, title: parentTitle + 'activity' },
	{ path: 'ebooks', component: EbooksComponent, title: parentTitle + 'ebooks' },
	{ path: 'settings', component: SettingsComponent, title: parentTitle + 'settings' },
	{ path: 'messenger', component: MessengerComponent, title: parentTitle + 'messenger' },
	{ path: 'files', component: FilesComponent, title: parentTitle + 'files' },
	{ path: '', redirectTo: 'messenger', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
