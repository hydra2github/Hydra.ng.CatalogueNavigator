// Angular core
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

// Services
import { AuthenticationService } from "../service/auth.service";
import { CatalogueApiService } from  '../service/catalogue-api.service';
import { SharedService } from '../service/shared.service';

// ViewModels
import { CustomerVM } from '../model/customervm.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  loginForm: FormGroup;
  submitted: boolean = false;  
  customer: CustomerVM;

  constructor( private formBuilder: FormBuilder 
              ,private router: Router
              ,private authService: AuthenticationService
              ,private sharedService: SharedService
              ,private apiService: CatalogueApiService) { }
             
             
  ngOnInit() {

    //this.setLoginStatus(false);

    this.loginForm = this.formBuilder.group({
      //email: ['', Validators.required],
      //password: ['', Validators.required]
      subscriptionKey: ['', Validators.required]
    });
  }

  
  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.getCustomersByKey(this.loginForm.controls.subscriptionKey.value)
    .subscribe(result => this.customer = result);

    if (this.customer === undefined) {
      return;
    } else {
      this.setLoginStatus(true);
      this.sharedService.setCustomerID(this.customer.id);
      this.router.navigate(['catalogue-list']);
    }
  }  
  
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.sharedService.sendMessage('Message from Home Component to App Component!');
  }
  
  setLoginStatus(newstatus: boolean): void {
    this.sharedService.setLoginStatus(newstatus);
  }
  
  clearMessage(): void {
    // clear message
    this.sharedService.clearMessage();
  }

}