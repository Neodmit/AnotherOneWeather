import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorageService.service';
import { HttpClient } from '@angular/common/http';

type CitiesType = {
  name:string
}

type WeatherData = {
  city:string
  windSpeed:number
  temp:number
  humidity:number
}
 
@Component({
  selector: 'app-editing-list',
  templateUrl: './editing-list.component.html',
  styleUrls: ['./editing-list.component.scss']
})

export class EditingListComponent implements OnInit{

  cities:Array<CitiesType> = [];
  displayedColumns:Array<string> = ["city", "windSpeed", "temp", "humidity"];
  URL:string = "http://api.openweathermap.org/data/2.5/weather?q=";
  APIkey:string = "fa82c24fbe3e23c43513022266126294";
  weatherItems:Array<WeatherData> = [
    {//данные просто для теста
      city: "asdf",
      windSpeed: 23,
      temp: 23, 
      humidity: 32
    }
  ];
  currentCityData?:WeatherData;

  constructor(private localstorageService: LocalstorageService, private http: HttpClient) { }

  ngOnInit(): void {  
    this.cities = this.localstorageService.getLocalstorageData('PlaceesData') 
    this.getCurrentWeather(this.cities, this.APIkey)
    console.log(this.weatherItems)
  }

  getCurrentWeather(items:Array<CitiesType>, Apikey:string):void {// надо будет вынести в сервис
    for(let item of items){
      this.http.get(this.URL + item.name + '&APPID=' + Apikey).subscribe(//он выводит данные раньше, чем их получает из-за асинхронности
        (data:any) => {                                                  //чито поделать с этим? Замедлить? Использовать другой метод получения?
          this.currentCityData={
            city: item.name,
            windSpeed: data["main"]["temp"],
            temp: data["wind"]["speed"],
            humidity: data["main"]["humidity"]
          }
          this.weatherItems.push(this.currentCityData)
      })
    }
  }

}
