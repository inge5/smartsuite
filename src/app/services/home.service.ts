import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  constructor(private _http: HttpClient) {
  }

  /* HOME */
  getHome(): Observable<any>{
    return this._http.get(`${environment.urlSmartsuite}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeSmartsales(): Observable<any>{
    return this._http.get(`${environment.urlSmartsales}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeMobileForms(): Observable<any>{
    return this._http.get(`${environment.urlMobileForms}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeOneCheck(): Observable<any>{
    return this._http.get(`${environment.urlOneCheck}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeOnTime(): Observable<any>{
    return this._http.get(`${environment.urlOnTime}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeCareTask(): Observable<any>{
    return this._http.get(`${environment.urlCareTask}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getHomeInTrack(): Observable<any>{
    return this._http.get(`${environment.urlInTrack}/pages/2/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  
  /* PRICES */
  getPriceSmartsales(): Observable<any>{
    return this._http.get(`${environment.urlSmartsales}/pages/100/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}
  getPriceMobileforms(): Observable<any>{
    return this._http.get(`${environment.urlMobileForms}/pages/5/`, {})
    .pipe(
        map(res => {
          return res['acf'];
    })
  )}

  /* Menu */
  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${environment.urlMenu}/2`);
  }
  getMenuDemo(): Observable<any>{
    return this._http.get(`${environment.urlMenu}/3`);
  }
  getMenuProductos(): Observable<any>{
    return this._http.get(`${environment.urlMenu}/4`);
  }
  getMenuEnigma(): Observable<any>{
    return this._http.get(`${environment.urlMenu}/5`);
  }
  getMenuInicioSesion(): Observable<any>{
    return this._http.get(`${environment.urlMenu}/6`);
  }

  /* WIDGETS */
  getWidgets(): Observable<any>{
    return this._http.get(`${environment.urlSmartsuite}/widgets`);
  }

  /* SUBMENUS */
  getMenuSmartsales(): Observable<any>{
    return this._http.get(`${environment.urlMenuSmartsales}/2`);
  }
  getMenuMobileForms(): Observable<any>{
    return this._http.get(`${environment.urlMenuMobileForms}/2`);
  }
  getMenuOneCheck(): Observable<any>{
    return this._http.get(`${environment.urlMenuOneCheck}/2`);
  }
  getMenuOnTime(): Observable<any>{
    return this._http.get(`${environment.urlMenuOnTime}/2`);
  }
  getMenuCareTask(): Observable<any>{
    return this._http.get(`${environment.urlMenuCareTask}/2`);
  }
  getMenuInTrack(): Observable<any>{
    return this._http.get(`${environment.urlMenuInTrack}/2`);
  }
}

