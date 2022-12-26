import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import { MessengerListComponent } from './components/messenger-list/messenger-list.component';
import { MessengerContentComponent } from './components/messenger-content/messenger-content.component';
import { MessengerInfoComponent } from './components/messenger-info/messenger-info.component';



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
