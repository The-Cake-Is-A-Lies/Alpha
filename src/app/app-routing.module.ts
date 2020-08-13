import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';

const routes: Routes = [

  { path : '**', component: LoginComponent},
  { path : '', component: LoginComponent},
  // Line 10 do for every single page
  { path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
