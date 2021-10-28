import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrentComponent } from './weather/current/current.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { SearchbarComponent } from './weather/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CurrentComponent,
    ForecastComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
