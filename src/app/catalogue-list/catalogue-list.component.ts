import { Component, OnInit } from '@angular/core';
import { CatalogueApiService } from  '../service/catalogue-api.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

import { CatalogueVM } from '../model/cataloguevm.model';
import { SharedService } from '../service/shared.service';

const INITIAL_STATE = { catalogueName: null, manufacturer: null };

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  public catalogues: Array<object> = [];

  public isUserLogged: boolean;

  allcatalogues: CatalogueVM[];
  active: CatalogueVM = {};

  constructor( private apiService: CatalogueApiService
              ,private sharedService: SharedService
              ,private router: Router) { }

  ngOnInit() {
    
    this.isUserLogged = this.sharedService.userState.getValue();
    if (!this.isUserLogged === true) {
      this.router.navigate(['login']);
      return;
    }

    this.getCatalogues();
  }

  // do HTTP call and retrieve Catalogue list 

  public  getCatalogues(){

    this.apiService.getCatalogues().subscribe((data: Array<object>) => {
      this.catalogues = data;
      console.log(data);
    });

    this.apiService.getCatalogues2()
    .subscribe(result => this.allcatalogues = result);
  }

  //

  setActive(selectedCat: CatalogueVM) {
    this.active = selectedCat;
  }

  //

  save(form: NgForm) {
    if (this.active.id) {
      //this.edit(form.value);
    } else {
      //this.add(form.value);
      form.reset();
    }
  }

  //

  reset() {
    this.active = INITIAL_STATE;
  }

}
