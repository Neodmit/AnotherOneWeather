import { Injectable } from '@angular/core';
import { CityType } from 'src/app/types/CityType';
import { LocalstorageService } from '../local-storage/localstorageService.service';

@Injectable({
  providedIn: 'root'
})
export class CititesDataService {
  private citiesData:Array<CityType> = this.localstorageService.get('PlaceesData');

  constructor(private localstorageService: LocalstorageService) { }

  public add(city:string):void{
    let tempCity:CityType ={
      name: city
    }
    this.citiesData.push(tempCity)
    this.localstorageService.set('PlaceesData', this.citiesData)
  }

  public get():Array<CityType> {
    return this.citiesData
  }

  public remove(city:string){
    let tempCity:CityType ={
      name: city
    }
    let deleteIndex: number = this.citiesData.findIndex(city => city.name === tempCity.name);
    this.citiesData.splice(deleteIndex, 1);
    this.localstorageService.set('PlaceesData', this.citiesData)
  }
}