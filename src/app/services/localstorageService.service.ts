import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  setLocalstorageData<T>(key:string, item:T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getLocalstorageData<T>(key:string): T{
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  removeLocalstorageData(key:string): void {
    localStorage.removeItem(key);
  }

  clearLocalstorage(): void {
    localStorage.clear();
  }
}
