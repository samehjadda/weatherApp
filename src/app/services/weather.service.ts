import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    let params = new HttpParams()
    .set('q', cityName)
    .set('key', environment.api_key);

    return this.http.get<WeatherData>(`${environment.weatherApiBaseUrl}/current.json`, {params: params});
  }
}
