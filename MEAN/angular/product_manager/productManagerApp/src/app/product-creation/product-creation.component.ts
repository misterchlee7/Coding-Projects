import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  newProduct: any;
  productData: any;
  errors: "";
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newProduct = { title: "", price: "", image_url: "" };
  }

  ngOnInit() {
  }

  onSubmitCreate(){
    this.productData = this.newProduct;
    let observable = this._httpService.addProduct(this.productData);
    observable.subscribe(data=> {
      if(data["error"]){
        this.errors = data["error"].message;
      }
      else{
        this._router.navigate(['product_list']);
      }
    })
  }
}
