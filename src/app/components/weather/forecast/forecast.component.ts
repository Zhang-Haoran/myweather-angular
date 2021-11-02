import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  @Input() forecastWeather: any = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
