import { Component, Input } from '@angular/core';
import {Employee} from './employee';

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
    @Input() EmployeeList: Array<Employee>;

constructor(
        projectId: number,
        Project_Name: string
        ) {
    this.projectId = projectId;
    this.Project_Name = Project_Name;
    
    this.EmployeeList = new Array<Employee>();
    }

}