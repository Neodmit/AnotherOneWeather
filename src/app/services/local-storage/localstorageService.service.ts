import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  set<T>(key:string, item:T):void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  get<T>(key:string):T {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  remove(key:string):void {
    localStorage.removeItem(key);
  }
}
