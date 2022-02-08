import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  setData<T>(key:string, item:T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getData<T>(key:string): T{
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  removeData(key:string): void {
    localStorage.removeItem(key);
  }

}
