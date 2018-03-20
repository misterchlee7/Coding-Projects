import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author_id: any;
  editName: any;
  authorData: any;
  nameData: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(
      (params: Params) => this.author_id = (params['id'])
    );
    
  }

  ngOnInit() {
    let observable = this._httpService.findAuthor(this.author_id);
    observable.subscribe(res => {
      console.log("Found author to edit", res)
      this.authorData = res;
      this.editName = { name: this.authorData.author.name };
    })
  }

  onSubmitEdit(){
    this.nameData = { name: this.editName.name };
    let observable = this._httpService.updateAuthor(this.author_id, this.nameData);
    observable.subscribe(
      res => {
        console.log("updated author", res)
        this._router.navigate(['']);
      }
    )
  }
}
