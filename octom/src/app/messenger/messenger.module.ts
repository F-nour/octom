import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import { MessengerListComponent } from './messenger-list/messenger-list.component';
import { MessengerContentComponent } from './messenger-content/messenger-content.component';
import { MessengerInfoComponent } from './messenger-info/messenger-info.component';



@NgModule({
  declarations: [
    MessengerComponent,
    MessengerListComponent,
    MessengerContentComponent,
    MessengerInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessengerComponent
  ],
})
export class MessengerModule { }
