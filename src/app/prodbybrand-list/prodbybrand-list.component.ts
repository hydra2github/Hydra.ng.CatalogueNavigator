import { Component, OnInit } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

// Services
import { CatalogueApiService } from  '../service/catalogue-api.service';
import { SharedService } from '../service/shared.service';

// ViewModels
import { ProductVM } from "../model/productvm.model";
import { BrandVM } from "../model/brandlistvm.model";
import { DropDownVM } from "../model/dropdownvm.model";

const INITIAL_STATE = { id: null, 
                        catalogueId: null, 
                        upc: null, 
                        skucode: null, 
                        articleName: null,
                        azureImage: 'assets/application/ImagePlaceholder.png' };

@Component({
  selector: 'app-prodbybrand-list',
  templateUrl: './prodbybrand-list.component.html',
  styleUrls: ['./prodbybrand-list.component.css']
})
export class ProdbybrandListComponent implements OnInit {


  // Variables
  public catalogueId: number;
  public brandList: DropDownVM[];
  public selectedBrand: DropDownVM;
  public listboxProducts: DropDownVM[];
  public selectedProduct: DropDownVM;

  public theProduct: ProductVM = INITIAL_STATE;

  //
  constructor( private apiService: CatalogueApiService 
              ,private sharedService: SharedService
              //,private router: Router
              ) { }


  // --> go to prodbybrand-list.component.html           
  ngOnInit() {
    // 
    this.catalogueId = this.sharedService.applicationObject.catalogueId.valueOf();
    //
    this.GetProductsBrandListForScreen(this.catalogueId);
  }


  // do HTTP call and retrieve ...

  public GetProductsBrandListForScreen(catalogueId: number){
    this.apiService.getGetProductsBrandListForScreen(catalogueId).subscribe(result => 
      this.brandList = result);
  }

  public getProductsForListBox(catalogueId: number, brandId: number){
    this.apiService.getProductsByCatalogueIdAndBrandIdForScreen(catalogueId, brandId)
    .subscribe(result => {
      this.listboxProducts = result;
        console.log(result);
      });
  }

  getProduct(productId: number) {
    this.apiService.getProductById(productId)
    .subscribe(result => {
      this.theProduct = result;
      console.log(result);
    });

  }



  // Form activity

  // <-- from p-dropdown
  // call http api
  // --> populate p-listbox
  public onBrandSelect(event) {
    //console.log(event);
    this.getProductsForListBox(this.catalogueId, event.value.value);
  }

  onProductSelect(event): void {
    console.log(event);
    //this.selectedProduct = myselection;
    this.getProduct(event.value);
  }

}
