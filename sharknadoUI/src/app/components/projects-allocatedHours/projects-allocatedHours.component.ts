import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

import { Employee } from '../../model/employee';
import { Project } from '../../model/project';
import { EmployeeProjectAssoc } from '../../model/employee_project_assoc';

@Component({
    selector: 'allocated-hours-modal',
    templateUrl: './projects-allocatedHours.html',
    styleUrls: ['./projects-allocatedHours.css']
})

export class AllocatedHours {

    @ViewChild('allocatedHours') private allocatedHours: ModalDirective;

    @Input()
    currentEmployee: Employee;

    @Input()
    currentProject: Project;

    @Output()
    modifyAllocatedHours: EventEmitter<EmployeeProjectAssoc> =  new EventEmitter<EmployeeProjectAssoc>();

    hoursArray: number[] = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

    @Input()
    currentProjects: Project[];

    selectedHours: number = 0;

    //  public populateAllocatedHrs($event: any, project: Project)
    // {

    // }
    public show() {
        this.allocatedHours.show();
    }

    public hide() {
        this.allocatedHours.hide();
    }

    ngOnChanges() {
    }
    private onModifyAllocatedHours() {

        let currentEmployeeProjectAssoc = new EmployeeProjectAssoc(this.currentEmployee, this.currentProject)
        currentEmployeeProjectAssoc.allocatedHrs = this.selectedHours;
        this.modifyAllocatedHours.emit(currentEmployeeProjectAssoc);
        console.log("Sent out this model %s with these hours %s", currentEmployeeProjectAssoc.employee.First_Name, currentEmployeeProjectAssoc.allocatedHrs.toString());
    }


}
