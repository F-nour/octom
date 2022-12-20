import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbooksComponent } from './ebooks.component';



@NgModule({
  declarations: [
    EbooksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EbooksComponent
  ],
})
export class EbooksModule { }
