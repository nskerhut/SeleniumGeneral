import { Input, Output } from '@angular/core'
import { Employee } from './employee';


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
    @Input() employees: Employee[] = [];

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
        this.employees = employees;
    }

    ngOnInit(): void {
        this.employees = new Array<Employee>();
    }

    @Output()
    public get getEmployees(): Employee[] {
        return this.employees;
    }
    public get getProjectId(): number {
        return this.projectId;
    }

}