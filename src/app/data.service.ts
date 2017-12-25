import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostData, UserData} from "./data.models";
@Injectable()
export class DataService {
  constructor(private _http : HttpClient){}
  getPosts() : Observable<Array<PostData>>{
    //noinspection TypeScriptValidateTypes
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
      .map((res : Array<PostData>) => res);
  }

  //noinspection JSAnnotator
  getUsers() : Observable<Array<UserData>> {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
      .map((res : Array<UserData>) => res);
  }
}

