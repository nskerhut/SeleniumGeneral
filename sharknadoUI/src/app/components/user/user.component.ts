import { Component, OnInit, NgZone, Inject} from '@angular/core';
import { UserService } from './../../service/user.service';
import {EventEmitter, Input, Output} from '@angular/core';
import {  LoginComponent  } from '../login/login.component'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fields: String[];
  test: User;
  id: any;
  userId: string;
  loginBool : boolean;
  toggleBool: boolean = false;
  profileBool: boolean = true;
  result: Object;
  constructor(
    private userService: UserService,
    private router : Router,
    private route:ActivatedRoute
  ) {


    this.test = <User>{};
    this.result=<Result>{};
    this.userService = userService;
    this.userId = this.userService._userId;
    console.log(this.userService._userId);
    this.getUser();
    this.id = this.route.snapshot.params['id'];
   }
  ngOnInit() {
  }
  public getUser(){
    console.log("this is getter user");
    return this.userService.getUser(this.userId).subscribe(
                                  ress => {this.test = ress;
                                  console.log("test ", this.test);
                                },
                               error => { this.router.navigate(['login']);
                              console.error('An error occurred getting users, navigating to login: ', error);
                            });
}
  public updateUser(First_Name: any,
  Last_Name: any,
  Email: any,
  Username: any,
  userId: any){
  this.toggle()
    return this.userService.setUser(
      First_Name,
      Last_Name,
      Email,
      Username,
      userId)
      .subscribe(resss => {this.result = resss;
        console.log("Hello ", Username);
  });
  }
  public toggle(){
    if(this.toggleBool == true){
      this.profileBool = true;
      this.toggleBool = false;
    }
    else{
      this.profileBool = false;
      this.toggleBool = true;
    }
  }
}
interface User{
  First_Name: string,
  Last_Name : string,
  Email: string,
  Username: string,
  userId?: string
}
interface Result{
  First_Name: string,
  Last_Name : string,
  Email: string,
  Username: string,
  userId: string

}


