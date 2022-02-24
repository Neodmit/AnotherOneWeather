import { Injectable } from '@angular/core';
import { UserType } from 'src/app/types/UserType';
import { LocalstorageService } from '../local-storage/localstorageService.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData:UserType = this.localstorageService.get('UserData');

  constructor(private localstorageService: LocalstorageService) { }

  public set(userData:UserType):void {
    this.userData = userData;
    this.localstorageService.set('UserData', userData);
  }

  public get():UserType {
    if (Object.keys(this.userData).length === 0) return { name: '', surname: '', api: '' };
    return this.userData;
  }
}