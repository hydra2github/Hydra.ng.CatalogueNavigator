import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { CatalogueVM } from '../model/cataloguevm.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueApiService {

  API_URL = 'http://localhost:8886';

  constructor(private httpClient: HttpClient) {}

  getCustomers(){
    return this.httpClient.get('${this.API_URL}/api/Customers');
  }
  
  getCatalogues(){
    //return this.httpClient.get('${this.API_URL}/api/Catalogues');
    return this.httpClient.get('http://localhost:8886/api/Catalogues');
  }

  getCatalogues2(){
    return this.httpClient.get<CatalogueVM[]>('http://localhost:8886/api/Catalogues');
  }
}
