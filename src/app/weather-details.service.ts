import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDetailsService {
  private apiKey = '1d8621efe2d64db091d232837242707';
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`);
  }
}
