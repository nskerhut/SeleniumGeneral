import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../service/projectservice.service';
import { Employee } from '../../model/employee';
import { Project } from '../../model/project';
import {EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DndModule} from 'ng2-dnd';


@Component({
  selector: 'app-projects, demo-modal-static',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


    unassignedEmployeeList: Array<Employee> = [];
    projectList: Array<Project> = [];


transferData: Employee;
receivedData: Array<Employee> = [];

transferDataSuccess(
        project: any,
        
        $event: any) {
    project.EmployeeList = new Array<Employee>();
    project.EmployeeList.push(new Employee(1,"BOB","Planet"));
    //project.employeeList.push(employee);
    alert(`move employee `+ $event.Target + ` to ` + project);
    console.log("move employee " + project);
    this.receivedData.push($event);
    
}       

public getAllEmployees() {
    console.log("getting all employees.")

    return this.projectService.getAllUnassignedEmployee().subscribe(ress => {
        this.unassignedEmployeeList = ress;
        console.log("employees ",this.unassignedEmployeeList);
        });
}

public getListOfProject() {
    console.log("getting list of projects")

    return this.projectService.getAllProjects().subscribe(ress => {
        this.projectList = ress;
        console.log("projects ", this.projectList);
    });
}

constructor(
        private projectService: ProjectService,
        private router : Router,
        private route:ActivatedRoute) {
    this.projectService = projectService;
}
    
    ngOnInit() {
       this.getAllEmployees();
       this.getListOfProject();
  }

}








