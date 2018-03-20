import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productId: any;
  productData: any;
  editProduct: any;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(
      (params: Params) => this.productId = (params['id'])
    );
    this.editProduct = { name: "", qty: "", price: "" };
  }

  ngOnInit() {
    let observable = this._httpService.findProduct(this.productId);
    observable.subscribe(data=> {
      console.log("found edit product specifics", data)
      this.productData = data;
      this.editProduct = { name: this.productData.product.name, qty: this.productData.product.qty, price: this.productData.product.price }
    });
  }

  onSubmitEdit(){
    this.errors = [];
    this.productData = { name: this.editProduct.name, qty: this.editProduct.qty, price: this.editProduct.price };
    let observable = this._httpService.editProduct(this.productId, this.productData);
    observable.subscribe(data=> {
      console.log("Data!!", data)
      if(data["message"] == "api/put edit error"){
        this.errors.push(data["error"].message);
        console.log(this.errors)
      }
      else{
        console.log("successfully edited product", data)
        this._router.navigate(['']);
      }
    })
  }

  onClickReset(){
    this.errors = [];
    this.ngOnInit();
  }
}
