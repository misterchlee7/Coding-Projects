import { Component, OnInit } from '@angular/core';
import { ShintoCoins } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  tableData: any;
  constructor(
    public _shintoCoins: ShintoCoins,
    private _router: Router
  ) {}

  ngOnInit() {
    this.tableData = this._shintoCoins.logData;
  }

}
