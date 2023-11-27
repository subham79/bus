import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output1Component } from './output1.component';
import { SubService } from '../services/sub.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [Output1Component],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    Output1Component
  ],providers:[
    SubService
  ]
})
export class Output1Module { }
