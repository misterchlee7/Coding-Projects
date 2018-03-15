import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.getPokemon();
  }

  getTasks(){
    // let tempObservable = this._http.get("/tasks");
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/tasks");
  }

  // getPokemon(){
  //   let pokemonObservable1 = this._http.get("https://pokeapi.co/api/v2/pokemon/1/");
  //   let pokemonObservable2 = this._http.get("https://pokeapi.co/api/v2/type/4/");
  //   pokemonObservable1.subscribe(data => console.log("Got Pokemon tasks!", data));
  //   pokemonObservable1.subscribe(data => console.log(`${data.name}'s type class are ${data.types[0].type.name} and ${data.types[1].type.name}`));
  //   pokemonObservable2.subscribe(data => console.log(`There are ${data.pokemon.length} other ${data.name} type Pokemon!`));
  // }
  addTask(newtask){
    return this._http.post("/tasks", newtask)
  }

  removeTask(taskid){
    return this._http.delete(`/tasks/${taskid}`)
  }

  editTask(taskid, edittask){
    return this._http.put(`/tasks/${taskid}`, edittask)
  }
}