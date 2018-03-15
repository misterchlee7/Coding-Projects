import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  log = [];
  totalGold: number;
  randomGold: number;
  logString: string;
  logdata: any;
  // getNinjaLogFromService(){
  //   let observable = this._httpService.getNinjaLog();
  //   observable.subscribe(data => {
  //     console.log("Got our ninja logs!", data)
  //     this.log = data["log"];
  //   });
  // }
  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log("Got our tasks!", data)
  //     this.tasks = data["tasks"];
  //   });
  // }
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
    this.totalGold = 0;
  }
  
  onButtonClickFarm(): void{
    this.randomGold = Math.floor(Math.random() * 4) + 2;
    this.totalGold += this.randomGold;
    this.logString = `You have earned ${this.randomGold} gold on the Farm!`;
    this.logdata = { totalGold: this.totalGold, logString: this.logString };
    this.updateGold(this.logdata);
  }

  onButtonClickCave(): void{
    this.randomGold = Math.floor(Math.random() * 6) + 5;
    this.totalGold += this.randomGold;
    this.logString = `You have earned ${this.randomGold} gold in the Cave!`;
    this.logdata = { totalGold: this.totalGold, logString: this.logString };
    this.updateGold(this.logdata);
  }
  
  onButtonClickHouse(): void{
    this.randomGold = Math.floor(Math.random() * 9) + 7;
    this.totalGold += this.randomGold;
    this.logString = `You have earned ${this.randomGold} gold in the House!`;
    this.logdata = { totalGold: this.totalGold, logString: this.logString };
    this.updateGold(this.logdata);
  }
  
  onButtonClickCasino(): void{
    this.randomGold = Math.floor(Math.random() * 201) - 100;
    this.totalGold += this.randomGold;
    if(this.randomGold < 0){
      this.logString = `You have lost ${this.randomGold} gold at the Casino!`;
      this.logdata = { totalGold: this.totalGold, logString: this.logString };
    }
    else{
      this.logString = `You have earned ${this.randomGold} gold at the Casino!`;
      this.logdata = { totalGold: this.totalGold, logString: this.logString };
    }
    this.updateGold(this.logdata);
  }

  updateGold(logdata: any){
    let observable = this._httpService.updateLog(logdata);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.log.push(data["log"]);
  }

}
