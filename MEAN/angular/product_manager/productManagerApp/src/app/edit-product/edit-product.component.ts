import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  errors: "";
  productId: any;
  productData: any;
  editProduct: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(
      (params: Params) => this.productId = (params['id'])
    );
    this.editProduct = { title: "", price: "", image_url: "" };
  }

  ngOnInit() {
    let observable = this._httpService.findProduct(this.productId);
    observable.subscribe(data=> {
      console.log("found edit product specifics", data)
      this.productData = data;
      this.editProduct = { title: this.productData.product.title, price: this.productData.product.price, image_url: this.productData.product.image_url }
    });
  }

  onSubmitEdit(){
    this.productData = { title: this.editProduct.title, price: this.editProduct.price, image_url: this.editProduct.image_url };
    let observable = this._httpService.editProduct(this.productId, this.productData);
    observable.subscribe(data=> {
      if(data["error"]){
        this.errors = data["error"].message;
      }
      else{
        console.log("successfully edited product", data)
        this._router.navigate(['product_list']);
      }
    })
  }

  onButtonClickDel(productId){
    let observable = this._httpService.deleteProduct(productId);
    observable.subscribe(data=> {
      console.log("del product success")
      this._router.navigate(['product_list']);
    })
  }
}
