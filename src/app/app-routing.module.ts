import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { authGuard } from 'src/guard/auth.guard';

const routes: Routes = [
  {path: 'home', 
  loadChildren: () =>
  import('../components/home/home.module').then((m) => m.HomeModule), canActivate :[
    authGuard
  ]},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
