import { Component } from '@angular/core';
import {PostData, UserData} from "./data.models";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postData : Array<PostData> = [];
  userData : Array<UserData> = [];
  postType: typeof PostData;
  userType: typeof UserData;
  selectedUser : number =  null;
  selectedPost : number =  null;
  constructor(private _dataService : DataService){
    this._dataService.getPosts()
      .subscribe(res => {
        this.postData = res;
        this.selectedPost = this.postData[0].id;
    });

    this._dataService.getUsers()
      .subscribe(res => {
        this.userData = res;
        this.selectedUser = this.userData[0].id;
      });
  }
}
