import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: any;
  productData: any;
  productQty: number;
  errors: string;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(
      (params: Params) => this.productId = (params['id'])
    );
  }

  ngOnInit() {
    let observable = this._httpService.findProduct(this.productId);
    observable.subscribe(data=> {
      console.log("found edit product specifics", data)
      this.productData = data;
      this.productQty = this.productData.product.qty;
    });
  }

  onButtonClickDel(productId){
    if(this.productQty > 0){
      this.errors = "To delete a product, the Qty must be 0."
    }
    else{
      let observable = this._httpService.deleteProduct(productId);
      observable.subscribe(data=> {
        console.log("del product success")
        this._router.navigate(['']);
      })
    }
  }
}
