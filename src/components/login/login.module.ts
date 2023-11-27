import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { LogonService } from '../services/logon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports :[
    LoginComponent
    
  ],
  providers:[
    LogonService
  ]
})
export class LoginModule { }
