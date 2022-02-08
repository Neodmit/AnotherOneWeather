import { Injectable } from '@angular/core';
import { UserType } from 'src/app/types/UserType';
import { LocalstorageService } from '../local-storage/localstorageService.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData:UserType = this.localstorageService.getData("UserData");//будто хардкод

  constructor(private localstorageService: LocalstorageService) { 
  }

  public setUserData(userData:UserType):void {
    this.userData = userData
  }

  public getUserData():UserType {
    return this.userData 
  }

  public getApi():string {
    return this.userData.api
  }
}