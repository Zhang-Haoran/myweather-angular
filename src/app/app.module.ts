import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CurrentComponent } from './components/weather/current/current.component';
import { ForecastComponent } from './components/weather/forecast/forecast.component';
import { SearchbarComponent } from './components/weather/searchbar/searchbar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CurrentComponent,
    ForecastComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
