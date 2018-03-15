import { Component, OnInit } from '@angular/core';
import { DataService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city_data = this._dataService.dataFromService
  constructor(public _dataService: DataService) {
    
  }
  ngOnInit() {
  }

}
