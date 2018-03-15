import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getNinjaLog();
  }

  // getTasks(){
  //   return this._http.get("/tasks");
  // }
  // startNinjaLog(){
  //   return this._http.get("/log");
  // }
  updateLog(logdata){
    return this._http.post("/log", logdata);
  }
}
