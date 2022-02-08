import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherType } from 'src/app/types/WeatherType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(url:string): Observable<WeatherType> {// надо будет вынести в сервис
    return this.http.get<WeatherType>(url);
 }
}
