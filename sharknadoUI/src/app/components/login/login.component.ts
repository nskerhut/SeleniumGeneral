import { Component, OnInit } from '@angular/core';
import {Input, Output } from '@angular/core';
import { Injectable, EventEmitter }  from '@angular/core';
import { UserService} from '../../service/user.service';
import { EmployeeService } from './../../service/employeeservice.service';
import {Http, Response, Headers,ResponseOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import {  UserComponent  } from '../user/user.component'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string;
  role: string;
  test: User;
  username: string;
  password: string;
  data: loginCredential;
  loginBool:boolean;
  adminBool:boolean;
  managerBool:boolean;
  constructor(
    private userService: UserService,
    private flashMessagesService: FlashMessagesService,
    private router : Router,
    private employeeService: EmployeeService
  ){
    this.userService = userService;
    this.data = <loginCredential>{};
  }
  ngOnInit() {
  }
  triggerLoginForm() {
      this.loginBool = !this.loginBool;
      this.userService.loginEvent.next(this.loginBool);
    }
    triggerRole() {
      this.adminBool = !this.adminBool;
      this.userService.adminEvent.next(this.adminBool);
    }
    triggerManager() {
      this.managerBool = !this.managerBool;
      this.userService.managerEvent.next(this.managerBool);
    }

checkCredential(bool:string,role:string, userId: string, token: string){
    console.log("this is checkCredential bool: ",bool);
    console.log("this is Role:",role);
    if(bool == "true"){
        sessionStorage.setItem('currentUser', token);
        console.log(sessionStorage.getItem('currentUser'));
        this.triggerLoginForm();
        this.flashMessagesService.show('Welcome '+this.username+'!', { cssClass: 'alert-success alert alert-info .close', timeout: 2500 });
        this.router.navigateByUrl("/user/"+userId);
        if(role =="Admin"){
          console.log("admin triggered");
          this.triggerRole();
        }
        if(role =="Manager"){
          console.log("admin triggered");
          this.triggerManager();
        }
    }
    else{
    this.flashMessagesService.show('Incorrect user information or user does not exist!', { cssClass: 'alert alert-dismissible alert-danger', timeout: 2500 });
    }
  }
  login(username: string, password: string){
    this.userService.login(this.username, this.password)
    .subscribe( res => {this.data = res;
                        this.userId= this.data.userId;
                        this.role = this.data.role;
                        this.userService._userId = this.userId;
                        this.employeeService._employeeId = this.userId;
                        this.checkCredential(this.data.success, this.data.role, this.userId, this.data.token);
                       this.userService._password = password;

    });
}
}
interface loginCredential{
  success: string,
  userId: string,
  role: string,
  token: string
}
interface User{
  Employee_Id : string,
  First_Name: string,
  Last_Name : string,
  Email: string,
  Username: string,
  userId?: string


}

