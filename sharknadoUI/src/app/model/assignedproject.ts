import { Project } from './project';
import { Input,Output, OnInit } from '@angular/core';
import { Employee } from './employee';

export class AssignedProject extends Project implements OnInit {
        
    allocatedHrs:number ;
    
    constructor( projectId: number
        , projectName: string
        , employees: Employee[]
        , verticalId?: string
        , projectCode?: string
        , agency?: string
        , agencyAbbr?: string
        , projectAbbr?: string
        , projectDescription?: string
        , projectStatus?: string
        , positionDescription?: string
        , allocatedHrs?: number
    ) {
        super(
        projectId,
        projectName,
        employees,
        verticalId,
        projectCode,
        agency,
        agencyAbbr,
        projectAbbr,
        projectDescription,
        projectStatus,
        positionDescription
        );
        
        if(allocatedHrs != null)
            this.allocatedHrs = allocatedHrs;
        else
            this.allocatedHrs = 0;
    }
    
    ngOnInit() {
        this.allocatedHrs = 0;
        console.log('init', this.allocatedHrs);
        
    }
    public addEmployee(employee: Employee, allocation: number):void{
        employee.addProject(this, allocation);
        super.addEmployee(employee,allocation);
    }
}