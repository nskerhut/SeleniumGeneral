import { Component, Input, ViewChild } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { Employee } from '../../model/employee';
import { Project } from '../../model/project';
import { EmployeeProjectAssoc } from '../../model/employee_project_assoc';

@Component({
    selector: 'allocated-hours-modal',
    templateUrl: './projects-allocatedHours.component.html',
    styleUrls: ['./projects.component.css']
})

export class AllocatedHours {

    @ViewChild('allocatedHours') public allocatedHours: ModalDirective;
    @Input()
    currentEmployee: Employee;

    @Input()
    currentProject: Project;

    hoursArray: number[] = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

    selectedHours: number = 0;

    //  public populateAllocatedHrs($event: any, project: Project)
    // {
        
    // }
}
