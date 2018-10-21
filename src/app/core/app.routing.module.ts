import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../login/login.component";
import { CatalogueListComponent } from '../catalogue-list/catalogue-list.component';
import { ProdbybrandListComponent } from '../prodbybrand-list/prodbybrand-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  ,{
    path:  'catalogue-list',
    component:  CatalogueListComponent
  }
  ,{
    path:  'prodbybrand-list',
    component:  ProdbybrandListComponent
  }  
  ,{path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }







//import {EditUserComponent} from "../edit-user/edit-user.component";

//const routes: Routes = [
// 
//  //{ path: 'add-user', component: AddUserComponent },
//  //{ path: 'list-user', component: ListUserComponent },
//  //{ path: 'edit-user', component: EditUserComponent },
//  
//];

//export const routing = RouterModule.forRoot(routes);
