import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  isLoggedIn = false;
  message: any;
  subscription: Subscription;
  items: MenuItem[];

  title = 'Hydra catalogue navigator';

  constructor(private sharedService: SharedService) {
    
    // subscribe to home component messages
    //this.subscription = this.sharedService.getMessage()
    //                                       .subscribe(message => { 
    //                                        this.message = message; 
    //                                        });
    
    this.subscription = this.sharedService.getLoginStatus()
    .subscribe(message => {
      this.isLoggedIn = message;
    });
  }

  ngOnInit() {
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'Logout',
              icon: 'fa fa-sign-out'
            }
          ]
      },
      {
          label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
