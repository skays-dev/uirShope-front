import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';
import { Observable, catchError } from 'rxjs';
import { Supplier } from './suppliers.interface';
import { Headers } from '../../helpers/headers/simpleHeader.header';
import { handleError } from '../../helpers/catchError';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log(this.config.apiEndPointCatalogue);
  }

  getAllSuppliers() : Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.config.apiEndPointCatalogue}/api/suppliers`, Headers).pipe(catchError(handleError));
  }

  getSingleSuppliers(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.config.apiEndPointCatalogue}/api/suppliers/${id}`, Headers).pipe(catchError(handleError));
  }
}
