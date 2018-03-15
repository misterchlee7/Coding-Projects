import { Component, OnInit } from '@angular/core';
import { DataService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city_data = this._dataService.dataFromService
  constructor(public _dataService: DataService) {
    
  }

  ngOnInit() {
  }

}
