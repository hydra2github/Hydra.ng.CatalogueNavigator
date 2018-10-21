import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// ViewModels
import { AppObject } from '../model/app.model';


// Reference : http://jasonwatmore.com/post/2018/06/25/angular-6-communicating-between-components-with-observable-subject
//           : https://www.c-sharpcorner.com/article/angular-services-for-sharing-data-between-component-using-angular-and-above/

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public subject = new Subject<any>();
  private data = {};
  public userState = new BehaviorSubject(false);   
  public applicationObject = new AppObject();
 
  constructor() { }


  // Send string messages

  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  // manage Login status

  setLoginStatus(loginStatus: boolean) {
    this.subject.next({ boolean: loginStatus });
    this.setUserStatus(loginStatus);
  }

  getLoginStatus(): Observable<boolean> {
    return this.subject.asObservable();
  }

  // manage customer Id

  setCustomerID(newId: number) {
    this.applicationObject.customerId = newId;
  }

  getCustomerID(): number {
    return this.applicationObject.customerId;
  }

  // Share data

  setSharedData(option, value) {  
    debugger;  
    this.data[option] = value;  
  }  
  
  getSharedData() {  
    return this.data;  
  }

  // 

  setUserStatus(newstate: boolean):void {
    this.userState.next(newstate);
    this.applicationObject.isLogged = newstate;
  }

  getUserStatus():Observable<boolean>{
    return this.userState.asObservable();
  }



}
