import { Injectable } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { Subscription } from 'rxjs';
import { OpenWeatherApiService } from '../open-weather/open-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentWeatherService {

  private item?:WeatherType
  private subscriptions: Array<Subscription> = []

  constructor(private openWeatherApiService:OpenWeatherApiService) { }

  async getWeatherData(city:CityType):Promise<WeatherType>{
      return new Promise((resolve) => 
       this.openWeatherApiService.get(city.name).subscribe(
        async data =>{
          this.item = await data
          resolve(this.item)
        })
      )
  }

  unsubscribe(): void{
    for(let subscribe of this.subscriptions){
      subscribe.unsubscribe();
      console.log(subscribe.closed)//Ты говорил, что он так не будет работать, но тут он выводит TRUE
    }
  }
}
