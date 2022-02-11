import { Injectable } from '@angular/core';
import { UserType } from 'src/app/types/UserType';
import { LocalstorageService } from '../local-storage/localstorageService.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData:UserType = this.localstorageService.getData("UserData");

  constructor(private localstorageService: LocalstorageService) { 
  }

  public getUser():UserType {
    return this.userData 
  }

  public getApi():string {
    return this.userData.api
  }
}