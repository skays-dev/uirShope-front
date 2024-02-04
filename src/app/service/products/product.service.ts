import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product, ProductAdded, ProductDetails } from './product.interface';
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';
import { Observable, catchError } from 'rxjs';
import { Headers, PutHeaders } from '../../helpers/headers/simpleHeader.header';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
    ) {
      console.log(this.config.apiEndPointCatalogue);
    }

    getAllProduct() : Observable<Product[]> {
      return this.http.get<Product[]>(`${this.config.apiEndPointCatalogue}/api/products`, Headers);
    }

    getSingleProduct(id: number | string) {
      return this.http.get<ProductDetails>(`${this.config.apiEndPointCatalogue}/api/products/${id}`, Headers);
    }

    addProduct(product: any) {
      return this.http.post(`${this.config.apiEndPointCatalogue}/api/products`, product, PutHeaders);
    }
}