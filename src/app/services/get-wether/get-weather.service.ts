import { Injectable } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { OpenWeatherApiService } from '../open-weather/open-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentWeatherService {

  constructor(private openWeatherApiService:OpenWeatherApiService) { }

  getBatchWeatherData(cities:Array<CityType>):Promise<WeatherType[]>{
    let tempPromArr:Array<Promise<WeatherType>> = []
    for(let city of cities){
      tempPromArr.push(
        new Promise((resolve) => 
          this.openWeatherApiService.get(city.name).subscribe(
          async data =>{
          resolve(await data)
          })
        )
      )
    }
    return Promise.all(tempPromArr)
  }
}
