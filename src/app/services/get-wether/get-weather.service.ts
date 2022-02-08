import { Injectable } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { PostService } from '../post/post.service';
import { WeatherType } from 'src/app/types/WeatherType';
import { UserDataService } from '../user-data/user-data.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  private items:WeatherType = {
    name: "",
    wind: {
      speed:null
    },
    main: {
      temp:null,
      humidity:null
    }
  };
  private url = "http://api.openweathermap.org/data/2.5/weather?q=";
  private  subscribe?: Subscription;
  private subscriptions: Array<Subscription> = []


  constructor(private postService:PostService, private userDataService:UserDataService) { }

  setWeatherData(city:CityType):WeatherType{
    this.subscribe = this.postService.getPosts(this.url + city.name + "&appid=" + this.userDataService.getApi()).subscribe(data => {
      this.items = data;
    })
    this.subscriptions.push(this.subscribe)
    return this.items;
  }

  unsubscribe(): void{
    for(let subscribe of this.subscriptions){
      subscribe.unsubscribe();
    }
  }
}
