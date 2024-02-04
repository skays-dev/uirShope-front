import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';
import { Observable, catchError } from 'rxjs';
import { Varieties } from './variety.interface';
import { Headers } from '../../helpers/headers/simpleHeader.header';
import { handleError } from '../../helpers/catchError';

@Injectable({
  providedIn: 'root'
})
export class VarietyService {

  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config:AppConfig
  ) {
    console.log(this.config.apiEndPointCatalogue)
  }

  getAllVarieties(): Observable<Varieties[]> {
    return this.http.get<Varieties[]>(`${this.config.apiEndPointCatalogue}/api/varietys`, Headers).pipe(catchError(handleError))
  }

  getSingleVariety(id: number): Observable<Varieties> {
    return this.http.get<Varieties>(`${this.config.apiEndPointCatalogue}/api/varietys/${id}`, Headers).pipe(catchError(handleError))
  }

  addEditVariety(postData: any, modalType: string){
    if(modalType === 'Add'){
      return this.http.post(`${this.config.apiEndPointCatalogue}/api/varietys`,postData);
    }else {
      return this.http.put(`${this.config.apiEndPointCatalogue}/api/varietys/${postData.idVariety}`,postData);
    }
  }
}
