import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'session18';
  weatherData: any;

  updateWeather(data: any) {
    this.weatherData = data;
  }
}
