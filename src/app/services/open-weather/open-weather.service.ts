import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherType } from 'src/app/types/WeatherType';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  private url:string  = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private api:string = '';

  constructor(private http: HttpClient, private userDataService:UserDataService) { }
  
  get(city:string):Observable<WeatherType> {
    this.api = this.userDataService.get().api;
    return this.http.get<WeatherType>(this.url + city + '&APPID=' + this.api);
  }
}
