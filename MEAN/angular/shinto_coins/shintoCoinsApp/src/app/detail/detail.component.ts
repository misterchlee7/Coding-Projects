import { Component, OnInit } from '@angular/core';
import { ShintoCoins } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail_id: number;
  tableData: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _shintoCoins: ShintoCoins
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.detail_id = (params['id']));
    this.tableData = this._shintoCoins.logData;
  }

}
