import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "../login/login.component";
import { CatalogueListComponent } from '../catalogue-list/catalogue-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  ,{
    path:  'catalogue-list',
    component:  CatalogueListComponent
  }
  ,{path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



//import { RouterModule, Routes } from '@angular/router';

//import {AddUserComponent} from "../add-user/add-user.component";
//import {ListUserComponent} from "../list-user/list-user.component";
//import {EditUserComponent} from "../edit-user/edit-user.component";

//const routes: Routes = [
// 
//  //{ path: 'add-user', component: AddUserComponent },
//  //{ path: 'list-user', component: ListUserComponent },
//  //{ path: 'edit-user', component: EditUserComponent },
//  
//];

//export const routing = RouterModule.forRoot(routes);
