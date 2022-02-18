import { Component, OnInit } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { GetCurrentWeatherService } from 'src/app/services/get-wether/get-weather.service';
import { CititesDataService } from 'src/app/services/citites-data/citites-data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editing-list',
  templateUrl: './editing-list.component.html',
  styleUrls: ['./editing-list.component.scss']
})
export class EditingListComponent implements OnInit{

  cities:Array<CityType> = Object.assign([],this.cititesDataService.get());
  displayedColumns:Array<string> = ["city", "windSpeed", "temp", "humidity"];
  citiesLength?:number;
  weatherItems:MatTableDataSource<WeatherType> = new MatTableDataSource;
  cityName:string = ""
  selectedRows = new Set<WeatherType>();

  constructor(private getCurrentWeatherService:GetCurrentWeatherService, private cititesDataService:CititesDataService) { }

  ngOnInit() { 
    this.setWeatherData()
  }

  setWeatherData(){
    let chunk = 4
    let tempCityArray:Array<CityType> = []
    for (let i = 0, j = this.cities.length; i < j; i += chunk) {
       tempCityArray = this.cities.slice(i, i + chunk);
        this.getCurrentWeatherService.getBatchWeatherData(tempCityArray).then(
        (items) => {
          this.weatherItems.data = this.weatherItems.data.concat(items)
        }
      )
    }
  }

  onEnter(){
    this.cititesDataService.add(this.cityName)
    this.cities = [{name: this.cityName}];
    this.setWeatherData()
    this.cityName=""
  }

  deleteItem(){
     if(this.selectedRows.size > 0){
      for(let selectItem of this.selectedRows){
        let deleteIndex: number = this.weatherItems.data.indexOf(selectItem);
        this.weatherItems.data.splice(deleteIndex, 1);
        this.weatherItems._updateChangeSubscription();
        this.cititesDataService.remove(selectItem.name!);
      }
     }

   }

}
