import { Component, OnInit } from '@angular/core';
import { ShintoCoins } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
sellAmt: any;
amt: number;
random_id: number;
total_coins_owned = this._shintoCoins.coinAmt;

  constructor(
    public _shintoCoins: ShintoCoins,
    private _router: Router
  ) {
    this.sellAmt = { amt: "" };
  }

  ngOnInit() {
    if(this._shintoCoins.coinAmt == undefined){
      this._shintoCoins.coinAmt = 0;
    }
    if(this._shintoCoins.logData == undefined){
      this._shintoCoins.logData = [];
    }
  }

  onSubmitSell(){
    if(this._shintoCoins.coinAmt >= this.sellAmt.amt){
      this.random_id = Math.floor(Math.random() * 10001) + 1;
      this._shintoCoins.coinAmt -= this.sellAmt.amt;
      console.log(this._shintoCoins.coinAmt)
      this._shintoCoins.logData.push({ id: this.random_id, action: "Sold", amount: this.sellAmt.amt });
      console.log(this._shintoCoins.logData)
      this.sellAmt = { amt: "" };
      this._router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this._router.navigate(["sell"])
      );
    }
  }
}
