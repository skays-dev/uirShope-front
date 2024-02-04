import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../config/appConfig.service';
import { AppConfig } from '../../config/appConfg.interafce';
import { Observable, catchError } from 'rxjs';
import { Etiquettes } from './etiquette.interface';
import { Headers } from '../../helpers/headers/simpleHeader.header';
import { handleError } from '../../helpers/catchError';

@Injectable({
  providedIn: 'root'
})
export class EtiquetteService {

  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log("etiquettes service its work");
  }

  getAllEtiquette(): Observable<Etiquettes[]> {
    return this.http.get<Etiquettes[]>(`${this.config.apiEndPointCatalogue}/api/etiquettes`, Headers).pipe(catchError(handleError));
  }
}
