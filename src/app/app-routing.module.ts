import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutmoreComponent } from './pages/aboutmore/aboutmore.component';
import { HomeComponent } from './pages/home/home.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:HomeComponent},
  {path:'contactUs',component:AboutComponent},
  {path:'aboutmore',component:AboutmoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
