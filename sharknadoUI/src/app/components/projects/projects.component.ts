import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employeeservice.service';
import { Employee } from '../../model/employee';
import {EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DndModule} from 'ng2-dnd';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    employeeList: Array<Employee> = [];

    listEmployees:Array<string> = [];
    listTeamOne:Array<string> = [];
    listTeamTwo:Array<string> = [];
    listTeamThree:Array<string> = [];
    listTeamFour:Array<string> = [];
    listTeamFive:Array<string> = [];
    listTeamSix:Array<string> = [];
    listTeamSeven:Array<string> = [];
    listTeamEight:Array<string> = [];
    listTeamNine:Array<string> = [];
    listTeamTen:Array<string> = [];
    listTeamEleven:Array<string> = [];
    listTeamTwelve:Array<string> = [];
            
            
public getAllEmployees() {
    console.log("getting all employees.")
    /*this.employeeList = [
                         new Employee(1, "Mark", "Summers"),
                         new Employee(1, "Alec", "Turner")
                         ];
    this.employeeList.forEach(employee => {
        this.listEmployees.push(employee.First_Name + ' ' + employee.Last_Name);
    });
    
    return; */
    return this.employeeService.getAllEmployee().subscribe(ress => {
        this.employeeList = ress;
        console.log("employees ",this.employeeList);
        });
}
constructor(private employeeService: EmployeeService,
        private router : Router,
        private route:ActivatedRoute) {
    this.employeeService = employeeService;
}
    
    ngOnInit() {
       this.getAllEmployees();
  }

}








