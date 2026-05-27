import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomeComponent } from './feature/components/home/home.component';
import { NotfoundComponent } from './feature/components/notfound/notfound.component';

export const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"", component:AuthLayoutComponent, children:[
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"register", component:LoginComponent, title:"Register"},

  ]},
  {path:"", component:MainLayoutComponent, children:[
    {path:"home", component:HomeComponent, title:"Home"},
    {path:"brands", component:HomeComponent, title:"Brands"},
    {path:"cart", component:HomeComponent, title:"Cart"},
    {path:"products", component:HomeComponent, title:"Products"},
    {path:"categories", component:HomeComponent, title:"Categories"},
  ]},
  {path:"**", component:NotfoundComponent, title:"Not Found 404 "},
];
