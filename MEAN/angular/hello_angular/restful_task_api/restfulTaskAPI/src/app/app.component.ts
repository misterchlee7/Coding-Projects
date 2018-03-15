import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  tasks = [];
  newTask: any;
  editTask: any;
  public showEdit = false;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.editTask = { title: "", description: "" }
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks in comp!", data);
      this.tasks = data["tasks"];
    });
  }

  onButtonClickGet(): void{
    this.getTasksFromService();
  }

  onButtonClickDel(taskid){
    let observable = this._httpService.removeTask(taskid);
    observable.subscribe(data => {
      console.log("Got delete task!", data);
      this.getTasksFromService();
    })
  }

  onButtonClickEdit(){
    this.showEdit = true;
  }

  onSubmit(){
    // send data to service to update form data
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Received data back from POST", data)
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
    this.newTask = { title: "", description: "" }
  }

  onSubmitEdit(taskid){
    // send data to service to update form data
    let observable = this._httpService.editTask(taskid, this.editTask);
    observable.subscribe(data => {
      console.log("Received data back from edit POST", data)
      this.editTask = { title: "", description: "" }
      this.getTasksFromService();
      this.showEdit = false;
    })
    this.editTask = { title: "", description: "" }
  }
}
