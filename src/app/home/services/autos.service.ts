import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutosModel } from '../interface/auto.interface';

@Injectable({providedIn: 'root'})
export class AutosService {
  private _URLBase="http://192.168.100.17:5281/api";

  constructor(private httpClient: HttpClient) { }

  getAutos():Observable<AutosModel[]>{
    return this.httpClient.get<AutosModel[]>(`${this._URLBase}/Auto`)
  }

}
