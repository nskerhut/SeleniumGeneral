import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from './../../service/user.service';
import { EmployeeService } from './../../service/employeeservice.service';
import { Employee } from '../../model/employee';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginBool: boolean = true;
  managerBool: boolean = true;
  adminBool: boolean = true;
  stringBool: string;
  id: any;
  //Employee Search Stuff
  allEmployees: any;
  numberOfEmployees: number; 
  limit: number;
  page: number =1;
  filter: Employee = new Employee();

  constructor(
    private flashMessagesService: FlashMessagesService,
    private userService: UserService,
    private employeeService: EmployeeService,
    private router : Router,
    private route:ActivatedRoute
  ) {
    this.stringBool = "";
    this.userService = userService;
    this.userService.loginEvent.subscribe(value => {this.loginBool = !value;})
    this.userService.adminEvent.subscribe(value => {this.adminBool = !value;})
    this.userService.managerEvent.subscribe(value => {this.managerBool =!value;})

    this.employeeService = employeeService;
   }
  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (allEmployees: Employee[]) => {
        this.allEmployees = allEmployees;
        this.numberOfEmployees = this.allEmployees.length;
        this.limit = this.allEmployees.length;
      });
  }

  public logout(){
    this.loginBool = true;
    this.managerBool = true;
    this.loginBool = !this.loginBool;
    this.adminBool = true;
    sessionStorage.removeItem('currentUser');
    this.userService.loginEvent.next(this.loginBool);
    this.flashMessagesService.show('You have successfully logged out!', { cssClass: 'alert-success alert alert-info .close', timeout: 2500 });
    this.userService.loginEvent.subscribe(value => {this.loginBool = !value;});
    console.log("this is logout ", this.loginBool);
    this.router.navigateByUrl("");
   }
}
