import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getWeather(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=077a2f38535c484f34911dfbe63b1407`);
  }
  // getTasks(){
  //   return this._http.get('/tasks');
  // }
}

export class DataService{
  dataFromService;
}
