import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  productData: any;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.newProduct = { name: "", qty: "", price: "" };
  }

  onSubmitCreate(){
    this.errors = [];
    this.productData = this.newProduct;
    let observable = this._httpService.addProduct(this.productData);
    observable.subscribe(data=> {
      if(data["error"]){
        this.errors.push(data["error"].message);
        console.log(this.errors)
      }
      else{
        this._router.navigate(['']);
      }
    })
  }

  onClickReset(){
    this.ngOnInit();
  }
}
