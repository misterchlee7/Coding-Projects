import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}
}

export class ShintoCoins {
  coinAmt;
  logData;
}