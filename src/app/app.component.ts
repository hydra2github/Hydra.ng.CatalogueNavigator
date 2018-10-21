// Angular core
import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from 'rxjs';

import { MenubarModule, MenuItem } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';

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

  constructor( private sharedService: SharedService
              ,private router: Router) {
    
    // subscribe to home component messages
    //this.subscription = this.sharedService.getMessage()
    //                                       .subscribe(message => { 
    //                                        this.message = message; 
    //                                        });
    
    this.subscription = this.sharedService.getLoginStatus()
    .subscribe(message => {
      //this.isLoggedIn = message.valueOf();
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
              label: 'Catalogs',
              icon: 'fa fa-list',
              command: (event) => { this.redirectCatalogSelection() }
            },
            {
              label: 'Logout',
              icon: 'fa fa-sign-out',
              command: (event) => { this.redirectLogout() }
            }
          ]
      }
    ];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }



  redirectCatalogSelection() {
    this.router.navigate(['catalogue-list']);
  }


  redirectLogout() {
    this.sharedService.setLoginStatus(false);
    this.router.navigate(['login']);
  }

}
