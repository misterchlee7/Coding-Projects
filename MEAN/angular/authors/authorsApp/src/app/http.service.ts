import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAuthors(){
    return this._http.get("/authors");
  }

  findAuthor(authorId){
    return this._http.get(`/edit/${authorId}`);
  }

  addAuthor(nameData){
    return this._http.post("/authors", nameData);
  }

  updateAuthor(authorId, authorData){
    return this._http.put(`/edit/${authorId}`, authorData);
  }

  deleteAuthor(authorId){
    return this._http.delete(`/delete/${authorId}`);
  }
}
