import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicallService } from './apicall.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ChildModule } from 'src/components/child/child.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from 'src/components/login/login.module';
import { CDirDirective } from 'src/directive/c-dir.directive';
import { NgOptimizedImage } from '@angular/common';
import { CpipePipe } from 'src/components/pipe/cpipe.pipe';
import { CInputModule } from 'src/components/input/c-input/c-input.module';
import { Output1Module } from 'src/components/output1/output1.module';
import { ReactiveFormModule } from 'src/components/reactive-form/reactive-form.module';

@NgModule({
  declarations: [
    AppComponent,
    CDirDirective,
    CpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    ChildModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    NgOptimizedImage,
    CInputModule,
    Output1Module,
    ReactiveFormModule
  
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
