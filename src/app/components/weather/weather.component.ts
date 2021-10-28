import { Component, OnInit } from '@angular/core';
import {OpenWeatherAPIService} from "../../services/open-weather-api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any = []
  constructor(private openWeatherAPIService: OpenWeatherAPIService) { }

  ngOnInit(): void {
    this.getCurrentWeatherFromAPI('Melbourne,au')
  }

  getCurrentWeatherFromAPI(searchValue: string): any {
    return this.openWeatherAPIService.getCurrentWeatherFromAPI(searchValue).toPromise().then(currentWeather => {
      this.currentWeather = currentWeather
      console.log(this.currentWeather)
    })
  }

}
