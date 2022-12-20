import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class CoreModule { }
