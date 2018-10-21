// Angular core
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

// Services
import { CatalogueApiService } from  '../service/catalogue-api.service';
import { SharedService } from '../service/shared.service';

// ViewModels
import { CatalogueVM } from '../model/cataloguevm.model';



const INITIAL_STATE = { catalogueName: null, manufacturer: null };

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  // Variables
  public isUserLogged: boolean;
  public custId: number;
  public catalogues: Array<object> = [];

  // ...for ViewModels  
  allcatalogues: CatalogueVM[];
  active: CatalogueVM = {};  

  constructor( private apiService: CatalogueApiService
              ,private sharedService: SharedService
              ,private router: Router
             ) { }

  ngOnInit() {
    
    this.isUserLogged = this.sharedService.userState.getValue();

    if (!this.isUserLogged === true) {
      this.router.navigate(['login']);
      return;
    }

    this.custId = this.sharedService.getCustomerID();

    this.getCatalogues(this.custId);
  }

  // do HTTP call and retrieve Catalogue list 

  public getCatalogues(custId: number){

    this.apiService.getCataloguesById(custId).subscribe((data: Array<object>) => {
      this.catalogues = data;
      console.log(data);
    });    

    this.apiService.getCataloguesViewModelById(custId).subscribe(result => this.allcatalogues = result);
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

  gotoDetail(selectedCatalogue: number) {
    this.sharedService.applicationObject.catalogueId = selectedCatalogue;
    this.router.navigate(['prodbybrand-list']);
  }


  


}
