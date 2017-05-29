import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../../model/employee';
import { Project } from '../../model/project';

@Component({
  selector: 'employee-handle',
  templateUrl: './employee-handle.component.html',
  styleUrls: ['./employee-handle.component.css']
})
export class EmployeeHandleComponent implements OnInit {

    @Input()
    employee: Employee;
    
    @Output()
    editClick = new EventEmitter<Employee>();
    
  constructor() { }

  ngOnInit() {
  }
  
   private onEditClick(){
       this.editClick.emit(this.employee);
   }
  
}
