import { Component, Input, Output,Injectable } from '@angular/core';
import {Employee} from './employee';

@Injectable()
export class Project {
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
    employeeList: Array<Employee>;

constructor(
        projectId: number,
        Project_Name: string
        ) {
    this.projectId = projectId;
    this.Project_Name = Project_Name;
    
    this.employeeList  = new Array<Employee>();
    }

public addEmployee(employee: Employee){
    this.employeeList.push(employee);
}
}