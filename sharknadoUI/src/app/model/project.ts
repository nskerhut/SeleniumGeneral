import { Component, Input, Output,Injectable, Inject, NgModule, OnInit } from '@angular/core'
import {Employee} from './employee';
import {Observable} from 'rxjs/Observable';

@Component({
    selector:'project-detail'
    ,template:``
    ,providers:[Employee]
})
export class Project  implements OnInit 
{

    projectId: number;
    verticalId: string;
    projectCode: string;
    agency: string;
    agencyAbbr: string;
    Project_Name: string;
    projectAbbr: string;
    projectDescription: string;
    projectStatus: string;
    positionDescription: string;
@Input() employees: Employee[] = [];
    
constructor(projectId: number
        , projectName:string
        , employees:Employee[]
        ) {
    this.projectId = projectId;
    this.Project_Name = projectName;
    /*this.verticalId = projectInfo.verticalId;
    this.projectCode = projectInfo.projectCode;
    this.agency = projectInfo.agency;
    this.agencyAbbr = projectInfo.agencyAbbr;
    this.projectAbbr =  projectInfo.projectAbbr;
    this.projectDescription = projectInfo.projectDescription;
    this.projectStatus = projectInfo.projectStatus;
    this.positionDescription = projectInfo.positionDescription;*/
    this.employees  = employees;
    }

    ngOnInit(): void {
     this.employees = new Array<Employee>();
    }

@Output()
public get getEmployees(): Employee[]{
    return this.employees;
}
public get getProjectId(): number {
    return this.projectId;
}
/*public addEmployee(employee: Employee){
    return this.employeeList.push(employee);
}*/
}