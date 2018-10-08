import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { CatalogueVM } from '../model/cataloguevm.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueApiService {

  //API_URL = 'http://localhost:8886';
  API_URL = 'https://hydrahubdev.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  getCustomers(){
    //return this.httpClient.get('${this.API_URL}/api/Customers');
    return this.httpClient.get('https://hydrahubdev.azurewebsites.net/api/Customers');
  }
  
  getCatalogues(){
    //return this.httpClient.get('${this.API_URL}/api/Catalogues');
    return this.httpClient.get('https://hydrahubdev.azurewebsites.net/api/Catalogues');
  }

  getCatalogues2(){
    //return this.httpClient.get<CatalogueVM[]>('${this.API_URL}/api/Catalogues');
    return this.httpClient.get<CatalogueVM[]>('https://hydrahubdev.azurewebsites.net/api/Catalogues');
  }
}
