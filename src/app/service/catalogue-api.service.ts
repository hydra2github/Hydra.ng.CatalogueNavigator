// Angular core
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http';

// Application
import{ AppConstantsModule } from '../core/app.costants.module';

// Models
import { CatalogueVM } from '../model/cataloguevm.model';
import { CustomerVM } from '../model/customervm.model';
import { ProductVM } from '../model/productvm.model';
import { DropDownVM } from "../model/dropdownvm.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueApiService {

  //variable initialization
  headers : any;
  _baseURL : string;

  //constructor initialization
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders().set('content-type', 'application/json');
    this._baseURL = AppConstantsModule.baseURL;
  }

  // GET Customers
  getCustomers(){
    return this.httpClient.get(this._baseURL + '/api/Customers');
  }

// GET Customer by Subscrition Key
getCustomersByKey(subKey: string){
  return this.httpClient.get<CustomerVM>(this._baseURL + '/api/Customers/' + subKey);
}

  // GET Catalogues
  getCataloguesById(custId: number){
    return this.httpClient.get(this._baseURL + '/api/Catalogues/' + custId);
  }
  
  // GET Catalogues into local ViewModel
  getCataloguesViewModelById(custId: number){
    return this.httpClient.get<CatalogueVM[]>(this._baseURL + '/api/Catalogues/' + custId);
  }


  //////////////////////////////////
  
  
  //
  // PRODUCT  
  // 

  // GET list of Brands for given Catalogue into local ViewModel
  getGetProductsBrandListForScreen(catalogueId: number){
    return this.httpClient.get<DropDownVM[]>(this._baseURL + '/api/products/GetProductsBrandListForScreen/' + catalogueId);
  }

  // GET list of Products by Catalogua and Brand into local ViewModel
  getProductsByCatalogueIdAndBrandIdForScreen(catalogueId: number, brandId: number){
    return this.httpClient.get<DropDownVM[]>(this._baseURL + '/api/products/GetProductsByBrandForScreen/' + catalogueId + '/' + brandId);
  }  

  // GET a Product
  getProductById(catalogueId: number){
    return this.httpClient.get<ProductVM>(this._baseURL + '/api/products/' + catalogueId);
  }


  // GET Products by catalogueId
  //getProductsByCatalogueId(catalogueId: number){
  //  return this.httpClient.get<ProductVM[]>(this._baseURL + '/api/products/' + catalogueId);
  //}

  // GET Catalogues into local ViewModel
  //getProductsByCatalogueIdAndBrandId(catalogueId: number, brandId: number){
  //  return this.httpClient.get<ProductVM[]>(this._baseURL + '/api/products/GetProductsByBrand/' + catalogueId + '/' + brandId);
  //}

  // GET Catalogues into local ViewModel
  //getGetProductsBrandList(catalogueId: number){
  //  return this.httpClient.get<ProductVM[]>(this._baseURL + '/api/products/GetProductsBrandList/' + catalogueId);    
  //}

}
