import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CInputComponent } from './c-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CInputComponent
  ]
})
export class CInputModule { }
