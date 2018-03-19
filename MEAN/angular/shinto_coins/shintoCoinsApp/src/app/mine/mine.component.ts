import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ShintoCoins } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  mineQ: any;
  random_id: number;
  constructor(
    private _httpService: HttpService,
    public _shintoCoins: ShintoCoins
  ) {
    this.mineQ = { answer: "" }
  }

  ngOnInit() {
    if(this._shintoCoins.coinAmt == undefined){
      this._shintoCoins.coinAmt = 0;
    }
    if(this._shintoCoins.logData == undefined){
      this._shintoCoins.logData = [];
    }
  }

  onSubmitMine(){
    if(this.mineQ.answer == 8){
      this.random_id = Math.floor(Math.random() * 10001) + 1;
      this._shintoCoins.coinAmt += 1;
      console.log(this._shintoCoins.coinAmt)
      this._shintoCoins.logData.push({ id: this.random_id, action: "Mined", amount: 1 });
      console.log(this._shintoCoins.logData)
      this.mineQ = { answer: "" }
    }
  }
}
