import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newName: any;
  nameData: any;
  errors = "";
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newName = { name: "" };
  }

  ngOnInit() {
  }

  onSubmitNew(){
    this.newName = this.newName.name;
    this.nameData = { name: this.newName };
    let observable = this._httpService.addAuthor(this.nameData);
    observable.subscribe( nameData => {
        if( nameData["message"] == "Error"  ){
          this.errors = "Author name is REQUIRED and must be at least 3 characters long";
          console.log(this.errors)
        }
        else{
          this._router.navigate(['']);
        }
      }
    )
    this.newName = { name: "" };
  }
}
