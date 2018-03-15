import { Component, OnInit } from '@angular/core';
import { DataService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  city_data = this._dataService.dataFromService
  constructor(public _dataService: DataService) {
    
  }
  ngOnInit() {
    // put getting observable then subscribe which would work also
  }

}
