import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges  } from '@angular/core';

import { ContextMenuComponent } from 'ngx-contextmenu';
import { Employee } from '../../model/employee';
import { Project } from '../../model/project';
import { ContextMenuService } from 'ngx-contextmenu';

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
    
    @Input()
    context: string;
    
    @Input()
    project: Project;
    
    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent
    @ViewChild(ContextMenuComponent) public projectMenu: ContextMenuComponent
    
    private isProject:boolean = false;
    
  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit() {
      if(this.project != null)
          this.isProject = true;
      else
          this.isProject = false;
  }
  ngOnChanges(){
  }
   private onEditClick(){
       this.editClick.emit(this.employee);
   }
  
   private onMenuClick($event: MouseEvent, employee:Employee){
       
           this.contextMenuService.show.next({
               contextMenu: this.basicMenu,
               event: $event,
               item: employee,
           });
       
       $event.preventDefault();
       $event.stopPropagation();
   }
   
   private onAddToProject() {
       alert("Add to project placeholder!");
   }
   
   private onRemoveFromProject() {
       alert("Remove from project placeholder!");
   }
   
   private onModifyProject() {
       alert("Modify time allocation placeholder!");
   }
}
