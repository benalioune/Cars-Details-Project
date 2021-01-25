import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  apUrl = "https://jsonkeeper.com/b/0K8O";


  constructor(private _http: HttpClient) { }

  getCars(){
    return this._http.get<Cars[]>(this.apUrl);
  }
}
