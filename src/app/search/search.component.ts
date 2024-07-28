import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDetailsService } from '../weather-details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  city: string = '';
  @Output() weatherFetched = new EventEmitter<any>();
  constructor(private WeatherDetailsService: WeatherDetailsService) {}

  searchWeather() {
    this.WeatherDetailsService.getWeather(this.city).subscribe((data) => {
      this.weatherFetched.emit(data);
    });
  }
}
