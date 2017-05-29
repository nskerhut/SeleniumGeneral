
import { Output } from '@angular/core';
import { Employee } from '../model/employee';
import { Project } from '../model/project';


export class EmployeeProjectAssoc {
    employee: Employee;
    project: Project;
    Start_Date: Date;
    End_Date: Date;
    Position_Description: string;
    Labor_Category: string;
    Labor_Category_Certified_By: string;
    Is_Assigned: number;
    Allocated_Hours: number;

    constructor(
        Employee?: Employee,
        Project?: Project,
        Start_Date?: Date,
        End_Date?: Date,
        Position_Description?: string,
        Labor_Category?: string,
        Labor_Category_Certified_By?: string,
        Is_Assigned?: number,
        Allocated_Hours?: number) {

        this.Employee = Employee;
        this.Project = Project;
        this.Start_Date = Start_Date;
        this.End_Date = End_Date;
        this.Position_Description = Position_Description;
        this.Labor_Category = Labor_Category;
        this.Labor_Category_Certified_By = Labor_Category_Certified_By;
        this.Is_Assigned = Is_Assigned;
        this.Allocated_Hours = Allocated_Hours;

    }
}