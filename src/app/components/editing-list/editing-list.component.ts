import { Component, OnInit, AfterViewChecked, Input, OnDestroy } from '@angular/core';
import { LocalstorageService } from 'src/app/services/local-storage/localstorageService.service';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { GetWeatherService } from 'src/app/services/get-wether/get-weather.service';
 
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

  constructor(private localstorageService: LocalstorageService, private getWeatherService:GetWeatherService) { }

  ngOnInit(): void { 
    this.citiesLength = this.cities.length
    for (let city of this.cities){
      this.weatherItems.push(this.getWeatherService.setWeatherData(city));
    }
  }

  ngOnDestroy():void {
    this.getWeatherService.unsubscribe
  }

}
