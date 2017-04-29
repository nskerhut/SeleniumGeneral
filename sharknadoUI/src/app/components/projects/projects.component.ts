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
    public enableForm(){
        //Enables fields in project details form.
        
        //if statement required to determine which form id is active
        
        
        
        
        
        if(document.getElementById("projectDetailsForm").style.display == "block"){
            var name2=<HTMLInputElement> document.getElementById("name2");
            var chargecode=<HTMLInputElement> document.getElementById("chargecode2");
            var manager=<HTMLInputElement> document.getElementById("manager2");
            var email=<HTMLInputElement> document.getElementById("email2");
            
            if(name2.readOnly == true){
                name2.readOnly=false;
                chargecode.readOnly=false;
                manager.readOnly=false;
                email.readOnly=false;
            }else{
                name2.readOnly=true;
            chargecode.readOnly=true;
            manager.readOnly=true;
            email.readOnly=true; 
            }
        }
        else if(document.getElementById("projectContactForm").style.display == "block"){
            
        }
        else{
            
        }
        
       
    }
    public setFieldReadOnly(){
        //projectDetailsForm
        var name2=<HTMLInputElement> document.getElementById("name2");
        var chargecode=<HTMLInputElement> document.getElementById("chargecode2");
        var manager=<HTMLInputElement> document.getElementById("manager2");
        var email=<HTMLInputElement> document.getElementById("email2");
        
        //projectContactForm
        
        
        //projectChargeCodeForm
        
        
        
        
        if(name2.readOnly == false){
            name2.readOnly = true;
            chargecode.readOnly = true;
            manager.readOnly = true;
            email.readOnly = true;
        }
        
    }
    public removeElements(){
        //Remove "Project Details" Tab
        document.getElementById("projectDetailsForm").style.display = "none";
        
        //Remove "Charge Codes" Tab
        document.getElementById("projectChargeCodeForm").style.display = "none";

        //Remove "Contacts" Tab
        document.getElementById("projectContactForm").style.display = "none";
        }
   
    public showContacts(){
        document.getElementById("projectContactForm").style.display = "block";
        document.getElementById("projDetailsHead").textContent = "View Project Contacts";
        
        
        //also need to get the values for charge codes and make sure they are set to a variable
        
        
        //set unneeded items to not visible
        
        }
    public showChargeCodes(){
        document.getElementById("projDetailsHead").textContent = "View Project Charge Codes";
        document.getElementById("projectChargeCodeForm").style.display = "block";
        }
    public submitChanges(){
        this.normalizeProjectForm();
        
        //save changes to db
    }
    public normalizeProjectForm(){
        document.getElementById("projectContactForm").style.display = "none";
        document.getElementById("projectChargeCodeForm").style.display = "none";
        
        document.getElementById("projDetailsHead").textContent = "View Project Details Form";
        
        document.getElementById("projectDetailsForm").style.display = "block";
        
        var name2=<HTMLInputElement> document.getElementById("name2");
        var chargecode=<HTMLInputElement> document.getElementById("chargecode2");
        var manager=<HTMLInputElement> document.getElementById("manager2");
        var email=<HTMLInputElement> document.getElementById("email2");
        
        if(name2.readOnly == false){
            name2.readOnly = true;
            chargecode.readOnly = true;
            manager.readOnly = true;
            email.readOnly = true;
        }
        
    }

}








