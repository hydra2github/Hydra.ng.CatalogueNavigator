import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./core/app.routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';

// Services

import { AuthenticationService } from "./service/auth.service";
import { CatalogueApiService } from "./service/catalogue-api.service";
import { SharedService } from "./service/shared.service";
import { UserService } from "./service/user.service";

//import { AddUserComponent } from './add-user/add-user.component';
//import { EditUserComponent } from './edit-user/edit-user.component';
//import {ListUserComponent} from "./list-user/list-user.component";

@NgModule({
  declarations: [
    AppComponent
    ,LoginComponent
    ,CatalogueListComponent
    //,ListUserComponent
    //,AddUserComponent
    //,EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
     AuthenticationService
    ,CatalogueApiService 
    ,SharedService
    ,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
