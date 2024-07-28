import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Provide the new HTTP client with interceptors
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
