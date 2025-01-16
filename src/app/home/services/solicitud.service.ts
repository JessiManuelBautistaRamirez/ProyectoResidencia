import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Cliente, Solicitud } from '../interface/auto.interface';
// import { environments } from '../../../env/environments';
import { environments } from '../../../env/environments.prod';

@Injectable({providedIn: 'root'})
export class SolicitudService {
  private _URLBase=environments.baseURL;
  // private _URLBase = environments.baseURL;


  constructor(private httpClient: HttpClient) { }

  postCliente(params:any):Observable<Cliente | null >{
    const body = {
      nombre:params.nombre,
      ap:params.ap,
      am:params.am,
      telefono:params.telefono

    };

    return this.httpClient.post<Cliente>(`${this._URLBase}/cliente`,body).pipe(
      catchError(err=> of(null))
    )
  }

  postSolicitud(params:any):Observable<Solicitud | null>{
    const body = params;
    console.log(params)
    return this.httpClient.post<Solicitud>(`${this._URLBase}/Solicitud`,body).pipe(
      catchError(err=>of(null))
    )
  }

}
