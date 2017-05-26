import { OnInit } from '@angular/core'
import { Employee } from './employee';


export class Project  implements OnInit  {

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
    employees: Employee[] = new Array<Employee>();
    
    
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
        , employeeAllocatedHrs?: number
    ) {
        this.projectId = projectId;
        this.Project_Name = projectName;
        this.verticalId = verticalId;
        this.projectCode = projectCode;
        this.agency = agency;
        this.agencyAbbr = agencyAbbr;
        this.projectAbbr = projectAbbr;
        this.projectDescription = projectDescription;
        this.projectStatus = projectStatus;
        this.positionDescription = positionDescription;
        
        if(employees == null)
            this.employees = new Array<Employee>();
        else
            this.employees = employees;
        
        
    }

    ngOnInit(): void {
        this.employees = new Array<Employee>();
    }


    
}