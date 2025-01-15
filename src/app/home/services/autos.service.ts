import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { AutosModel, Description, Sucursal } from '../interface/auto.interface';
import { environments } from '../../../env/environments.prod';
// import { environments } from '../../../env/environments';

@Injectable({providedIn: 'root'})
export class AutosService {
  private _URLBase=environments.baseURL;
  // private _URLBase = environments.baseURL;

  constructor(private httpClient: HttpClient) { }

  getAutos():Observable<AutosModel[]>{
    return this.httpClient.get<AutosModel[]>(`${this._URLBase}/Auto`)
  }

  getAutoById(autoId:number):Observable<AutosModel|null>{
    return this.httpClient.get<AutosModel>(`${this._URLBase}/Auto/${autoId}`).pipe(
      catchError(err=>of(null))
    )
  }

  getAutoDescription(descriptionId:string):Observable<Description | null>{
    return this.httpClient.get<Description>(`${this._URLBase}/Descripcion_auto/${descriptionId}`).pipe(
      catchError(err=>of(null))
    )
  }



  getSucursal():Observable<Sucursal[]>{
    return this.httpClient.get<Sucursal[]>(`${this._URLBase}/Sucursal`)
  }

}
