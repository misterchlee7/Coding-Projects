import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data=> {
      console.log("Got product list", data)
      this.productList = data;
    })
  }

  onButtonClickDel(productId){
    let observable = this._httpService.deleteProduct(productId);
    observable.subscribe(data=> {
      console.log("del product success")
      this.getProducts();
    })
  }
}
