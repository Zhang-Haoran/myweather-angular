import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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
  constructor(
    private openWeatherAPIService: OpenWeatherAPIService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.list().subscribe((result) => {
      console.log('local storage changed');
      console.log(result);
    });
    this.localStorageService.add('key1', '1');
    this.localStorageService.add('key2', '2');
    this.localStorageService.add('key3', '3');
    this.localStorageService.add('key4', '4');
    this.localStorageService.add('key5', '5');
    this.localStorageService.update('key2', '200');
    this.localStorageService.get('key1');
    this.localStorageService.remove('key1');
  }

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
