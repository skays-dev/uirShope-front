import { Inject, Injectable } from '@angular/core';
import { Category } from './categories.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';
import { Observable, catchError } from 'rxjs';
import { Headers } from '../../helpers/headers/simpleHeader.header';
import { handleError } from '../../helpers/catchError';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log("categories service its work");
  }

  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${this.config.apiEndPointCatalogue}/api/categories`, Headers).pipe(catchError(handleError));
  }


}