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


    employeeList: Array<Employee> = [];
    projectList: Array<Project> = [];

    listEmployees:Array<string> = [];
    listProjects:Array<string> = [];

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

    return this.projectService.getAllUnassignedEmployee().subscribe(ress => {
        this.employeeList = ress;
        console.log("employees ",this.employeeList);
        
        this.employeeList.forEach(employee => {
            this.listEmployees.push(employee.First_Name + ' ' + employee.Last_Name);
        });
        
        });
}

public getListOfProject() {
    console.log("getting list of projects")

    return this.projectService.getAllProjects().subscribe(ress => {
        this.projectList = ress;
        console.log("projects ", this.projectList);

        this.projectList.forEach(project => {
            this.listProjects.push(project.Project_Name);
        });
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
public bee(){
    alert("funrun");
    var name2=<HTMLInputElement> document.getElementById("name2");
    var chargecode=<HTMLInputElement> document.getElementById("chargecode2");
    var manager=<HTMLInputElement> document.getElementById("manager2");
    var email=<HTMLInputElement> document.getElementById("email2");
    console.log(name2);
    console.log(chargecode);
    
    name2.readOnly=false;
    chargecode.readOnly=false;
    manager.readOnly=false;
    email.readOnly=false;
    }
}








