import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';



@NgModule({
  declarations: [
    FilesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilesComponent,
  ]
})
export class FilesModule { }
