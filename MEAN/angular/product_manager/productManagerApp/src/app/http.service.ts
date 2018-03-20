import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}

  getProducts(){
    return this._http.get("/api/products");
  }

  findProduct(productId){
    return this._http.get(`/api/products/${productId}`);
  }

  addProduct(productData){
    return this._http.post("/api/products/new", productData)
  }

  editProduct(productId, productData){
    return this._http.put(`/api/products/edit/${productId}`, productData);
  }

  deleteProduct(productId){
    return this._http.delete(`/api/products/delete/${productId}`);
  }
}
