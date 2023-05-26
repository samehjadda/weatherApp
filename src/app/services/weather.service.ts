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
    const api_key = '8e60f918b8c44268982204033232505';
    const weatherApiBaseUrl = 'http://api.weatherapi.com/v1';
    const url = `${weatherApiBaseUrl}/current.json?key=${api_key}&q=${cityName}`;
    
    return this.http.get<WeatherData>(url);
  }
  
}
