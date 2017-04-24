import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employeeservice.service';
import {EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Ng2DragDropModule} from "ng2-drag-drop";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


Employee = [
        {name: "Garrett Micheau", type: "employee"},
        {name: "Jeremy Birdsong", type: "employee"},
        {name: "Mitch Owens", type: "employee"},
        {name: "Sandy Sanderson", type: "employee"},
        {name: "Bob Boberson", type: "employee"},
        {name: "Test Testname", type: "employee"},
        {name: "Jonathen Perot", type: "employee"},
        {name: "Jonathen Alexander", type: "employee"}];
        


  
  droppedEmployee = [];



  onAnyDrop(e: any) {
      this.droppedEmployee.push(e.dragData);

      if(e.dragData.type === 'employee')
          this.removeEmployee(e.dragData, this.Employee);
      else
          this.removeEmployee(e.dragData, this.Employee);
  }

on(e: any) {
  console.log("ss");
      this.Employee.push(e.dragData);

      if(e.dragData.type === 'employee')
          this.removeEmployee(e.dragData, this.droppedEmployee);
      else
          this.removeEmployee(e.dragData, this.droppedEmployee);

}


  

  removeEmployee(item: any, list: Array<any>) {
      let index = list.map((e) => {
          return e.name
      }).indexOf(item.name);
      list.splice(index, 1);
  }



  constructor() { }

  ngOnInit() {
  }

}








