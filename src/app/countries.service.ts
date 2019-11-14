import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private _http:Http) { }
  public getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all").pipe(map(response=>{
      // console.log(response.json());
      return response.json();
    },
    error=>{
      this.getErrorHandler(error);
    }))
  }
  public getErrorHandler(error){
    console.error("error is "+ error);
    return Observable.throw(error || "internal server error");
  }
}
