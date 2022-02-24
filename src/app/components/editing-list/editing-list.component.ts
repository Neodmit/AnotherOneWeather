import { Component, OnInit } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { WeatherType } from 'src/app/types/WeatherType';
import { GetCurrentWeatherService } from 'src/app/services/get-wether/get-weather.service';
import { CititesDataService } from 'src/app/services/citites-data/citites-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-editing-list',
  templateUrl: './editing-list.component.html',
  styleUrls: ['./editing-list.component.scss']
})
export class EditingListComponent implements OnInit {

  cities:Array<CityType> = Object.assign([], this.cititesDataService.get());
  displayedColumns:Array<string> = ['city', 'windSpeed', 'temp', 'humidity'];
  citiesLength?:number;
  weatherItems:MatTableDataSource<WeatherType> = new MatTableDataSource;
  cityName:string = '';
  selectedRows = new Set<WeatherType>();

  constructor(private getCurrentWeatherService:GetCurrentWeatherService, private cititesDataService:CititesDataService, private userDataService:UserDataService) { }

  ngOnInit() { 
    if (this.userDataService.get().api === '') {
      alert('Set Api key pls');
    }
    else {
      this.setWeatherData();
    }
  }

  async setWeatherData():Promise<boolean> {
    let chunk = 4;
    let tempCityArray:Array<CityType> = [];
    let checkToAdd:boolean = true;
    for (let i = 0, j = this.cities.length; i < j; i += chunk) {
      tempCityArray = this.cities.slice(i, i + chunk);
      await this.getCurrentWeatherService.getBatchWeatherData(tempCityArray).then(
        (items) => {
          this.weatherItems.data = this.weatherItems.data.concat(items);
        }).catch(() => {
          checkToAdd = false;
          alert('No this city');
        }
      );
    }
    return checkToAdd;
  }

  async onEnter():Promise<void> {
    this.cities = [{ name: this.cityName }];
    if (await this.setWeatherData()) {
      this.cititesDataService.add(this.cityName);
      this.cityName = '';
    }
  }

  deleteItem():void {
    if (this.selectedRows.size > 0) {
      for (let selectItem of this.selectedRows) {
        let deleteIndex: number = this.weatherItems.data.indexOf(selectItem);
        this.weatherItems.data.splice(deleteIndex, 1);
        this.weatherItems._updateChangeSubscription();
        this.cititesDataService.remove(selectItem.name!);
      }
    }
  }
}
