// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from "./core/app.routing.module";

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';

// Application components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { ProdbybrandListComponent } from './prodbybrand-list/prodbybrand-list.component';

// Services
import { AuthenticationService } from "./service/auth.service";
import { CatalogueApiService } from "./service/catalogue-api.service";
import { SharedService } from "./service/shared.service";
import { UserService } from "./service/user.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
      AppComponent
    , LoginComponent
    , CatalogueListComponent
    , ProdbybrandListComponent
    //,ListUserComponent
    //,AddUserComponent
    //,EditUserComponent
  ],
  imports: [
     BrowserModule
    ,AppRoutingModule
    ,ReactiveFormsModule
    ,HttpClientModule
    ,FormsModule
    ,MenubarModule
    ,ButtonModule
    ,DropdownModule
    ,BrowserAnimationsModule
    ,ListboxModule
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
