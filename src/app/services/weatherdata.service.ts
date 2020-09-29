import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


let serviceUrl: string = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: string = 'd1835cc94d8d56de4da43203ac291613'

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }
  load (city: string) {
    return this.http.get(serviceUrl + '?q=' + city + '&appid=' + apiKey)
  }
  getIconUrl (icon: string) {
    return 'http://openweathermap.org/img/w/' + icon + '.png'
  }
}
