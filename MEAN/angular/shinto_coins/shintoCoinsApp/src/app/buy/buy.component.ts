import { Component, OnInit } from '@angular/core';
import { ShintoCoins } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyAmt: any;
  amt: number;
  random_id: number;
  total_coins_owned = this._shintoCoins.coinAmt;
  constructor(
    public _shintoCoins: ShintoCoins,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.buyAmt = { amt: "" };
  }

  ngOnInit() {
    if(this._shintoCoins.coinAmt == undefined){
      this._shintoCoins.coinAmt = 0;
    }
    if(this._shintoCoins.logData == undefined){
      this._shintoCoins.logData = [];
    }
  }

  onSubmitBuy(){
    this.random_id = Math.floor(Math.random() * 10001) + 1;
    this._shintoCoins.coinAmt += this.buyAmt.amt;
    console.log(this._shintoCoins.coinAmt)
    this._shintoCoins.logData.push({ id: this.random_id, action: "Bought", amount: this.buyAmt.amt });
    console.log(this._shintoCoins.logData)
    this.buyAmt = { amt: "" };
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this._router.navigate(["buy"])
    );
  }
}
