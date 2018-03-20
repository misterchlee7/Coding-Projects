import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  authorsList: any;
  authorId: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    
  }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(res => {
      console.log("Got authors list", res)
      this.authorsList = res;
    })
  }

  onButtonClickDel(authorId){
    let observable = this._httpService.deleteAuthor(authorId);
    observable.subscribe(res => {
      console.log("Deleted author", res)
      this.getAuthors();
    })
  }
}
