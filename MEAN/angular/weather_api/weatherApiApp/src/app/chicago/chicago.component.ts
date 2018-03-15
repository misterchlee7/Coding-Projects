import { Component, OnInit } from '@angular/core';
import { DataService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city_data = this._dataService.dataFromService
  constructor(public _dataService: DataService) {
    
  }
  ngOnInit() {
  }

}
