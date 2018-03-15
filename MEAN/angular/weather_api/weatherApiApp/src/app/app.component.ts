import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  city_data: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    public _dataService: DataService
  ){}

  ngOnInit(){
    // this.getTasksFromService();
  }

  onCityClick(city){
    let observable = this._httpService.getWeather(city);
    observable.subscribe(data => {
      console.log("got city data", data)
      this.city_data = data;
      this._dataService.dataFromService = this.city_data;
    });
  }
  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log("got tasks", data)
  //     this.tasks = data["tasks"];
  //   });
  // }
}
