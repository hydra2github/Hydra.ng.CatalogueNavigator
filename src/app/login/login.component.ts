import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

import { AuthenticationService } from "../service/auth.service";
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor( private formBuilder: FormBuilder 
              ,private router: Router
              ,private authService: AuthenticationService
              ,private sharedService: SharedService) { }
             
             
  ngOnInit() {
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

    /*
    if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
        this.router.navigate(['list-user']);
    }else {
      this.invalidLogin = true;
    }
    */

    if(this.loginForm.controls.subscriptionKey.value == '123') {

        //this.sendMessage()
        this.setLoginStatus()
        this.router.navigate(['catalogue-list']);

    }else {
      this.invalidLogin = true;
    }

  }



  
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.sharedService.sendMessage('Message from Home Component to App Component!');
  }

  setLoginStatus(): void {
    this.sharedService.setLoginStatus(true);
  }

  clearMessage(): void {
    // clear message
    this.sharedService.clearMessage();
  }

}