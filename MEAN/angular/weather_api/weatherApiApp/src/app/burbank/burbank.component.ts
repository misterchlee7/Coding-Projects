import { Component, OnInit } from '@angular/core';
import { DataService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city_data = this._dataService.dataFromService
  constructor(public _dataService: DataService) {
    
  }
  ngOnInit() {
  }

}
