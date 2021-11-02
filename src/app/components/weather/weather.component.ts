import { Component, OnInit } from '@angular/core';
import {OpenWeatherAPIService} from "../../services/open-weather-api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather: any = undefined;
  searchValue: string = ""
  constructor(private openWeatherAPIService: OpenWeatherAPIService) { }

  ngOnInit(): void {
  }

  getCurrentWeatherFromAPI(searchValue: string): {} {
    return this.openWeatherAPIService.getCurrentWeatherFromAPI(searchValue).toPromise().then(currentWeather => {
      this.currentWeather = currentWeather
      console.log(this.currentWeather)
    })
  }

  handleSearchValueChange(searchValue: string){
    this.searchValue = searchValue
    console.log(this.searchValue)
  }

  handleSubmit(event: Event){
    console.log("hello")
    this.getCurrentWeatherFromAPI(this.searchValue)
  }
}
