import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherAPIService {
  constructor(private http: HttpClient) { }

  getCurrentWeatherFromAPI(searchValue: string): Observable<any>{
    const currentWeatherURL = `${environment.WEATHER_API_URL}weather?q=${searchValue}&APPID=${environment.APP_KEY}&units=metric`;
    return this.http.get<any>(currentWeatherURL);
  }

  getForecastWeatherFromAPI(searchValue: string): Observable<any>{
    const forecastWeatherURL = `${environment.WEATHER_API_URL}forecast?q=${searchValue}&APPID=${environment.APP_KEY}&units=metric`;
    return this.http.get<any>(forecastWeatherURL);
  }
}
