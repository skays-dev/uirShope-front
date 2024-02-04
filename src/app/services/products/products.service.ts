import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products .interface';
import { Headers, PutHeaders } from '../../helpers/headers/simpleHeader.header'; 
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndPointCatalogue);
   }

   getAllProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.config.apiEndPointCatalogue}/api/products`, Headers);
  }
}
