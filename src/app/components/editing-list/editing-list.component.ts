import { Component, OnInit, AfterViewChecked, Input, OnDestroy } from '@angular/core';
import { LocalstorageService } from 'src/app/services/local-storage/localstorageService.service';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { GetCurrentWeatherService } from 'src/app/services/get-wether/get-weather.service';
 
@Component({
  selector: 'app-editing-list',
  templateUrl: './editing-list.component.html',
  styleUrls: ['./editing-list.component.scss']
})

export class EditingListComponent implements OnInit, OnDestroy{

  cities:Array<CityType> = this.localstorageService.getData('PlaceesData');
  displayedColumns:Array<string> = ["city", "windSpeed", "temp", "humidity"];
  citiesLength?:number;
  weatherItems:Array<WeatherType> = [];

  constructor(private localstorageService: LocalstorageService, private getCurrentWeatherService:GetCurrentWeatherService) { }

 ngOnInit() { 
  this.citiesLength = this.cities.length
  let chunk = 4
  let tempCityArray:Array<CityType> = []
    for (let i = 0, j = this.cities.length; i < j; i += chunk) {
      tempCityArray = this.cities.slice(i, i + chunk);
      for (let city of tempCityArray) {
        this.getCurrentWeatherService.getWeatherData(city).then((item) => 
        {
          this.weatherItems.push(item)
        })
      }
    }
    console.log(this.weatherItems)
  }


  ngOnDestroy():void {
    this.getCurrentWeatherService.unsubscribe()
  }

}
