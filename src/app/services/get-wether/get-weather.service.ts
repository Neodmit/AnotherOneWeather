import { Injectable } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { OpenWeatherApiService } from '../open-weather/open-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentWeatherService {

  constructor(private openWeatherApiService:OpenWeatherApiService) { }

  getBatchWeatherData(cities:Array<CityType>):Promise<WeatherType[]> {
    let tempPromArr:Array<Promise<WeatherType>> = [];
    for (let city of cities) {
      tempPromArr.push(
        new Promise((resolve, reject) => {
          this.openWeatherApiService.get(city.name).subscribe({
            next: data => {
              resolve(data);
            },
            error: err => {
              reject(err);
            }
          });
        })
      );
    }
    return Promise.all(tempPromArr);
  }
}
