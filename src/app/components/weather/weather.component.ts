import { Component, OnInit } from '@angular/core';
import { OpenWeatherAPIService } from '../../services/open-weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  currentWeather: any = undefined;
  forecastWeather: any = undefined;
  searchValue: string = '';
  constructor(private openWeatherAPIService: OpenWeatherAPIService) {}

  ngOnInit(): void {}

  getCurrentWeatherFromAPI(searchValue: string): {} {
    return this.openWeatherAPIService
      .getCurrentWeatherFromAPI(searchValue)
      .toPromise()
      .then((currentWeather) => {
        this.currentWeather = currentWeather;
        console.log(this.currentWeather);
      });
  }

  getForecastWeatherFromAPI(searchValue: string): {} {
    return this.openWeatherAPIService
      .getForecastWeatherFromAPI(searchValue)
      .toPromise()
      .then((forecastWeather) => {
        this.forecastWeather = forecastWeather.list;
        console.log(this.forecastWeather);
      });
  }

  handleSearchValueChange(searchValue: string) {
    this.searchValue = searchValue;
  }

  handleSubmit(event: Event) {
    this.getCurrentWeatherFromAPI(this.searchValue);
    this.getForecastWeatherFromAPI(this.searchValue);
  }
}
