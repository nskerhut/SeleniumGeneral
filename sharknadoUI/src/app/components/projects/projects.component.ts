import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../service/projectservice.service';
import { EmployeeService } from './../../service/employeeservice.service';
import { Employee } from '../../model/employee';
import { Project } from '../../model/project';
import { EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DndModule } from 'ng2-dnd';


@Component( {
    selector: 'app-projects, demo-modal-static',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']/*,
  providers: [Project]*/
} )
export class ProjectsComponent implements OnInit {
    contactList: Array<string> = ["", "one", "two", "three", "four", "Add New Charge Code"];
    projectDetailsForm = "projectDetailsForm";

    projectFrom: Project;
    
    unassignedEmployeeList: Array<Employee> = [];
    projectList: Array<Project> = [];
    public currentproject: Project;
    employee: Employee = new Employee;
    assignedEmployees: Array<Employee> = [];


    addProject( name: string, manager: string, charge_code: string ) {
        let employees = new Array<Employee>();
        // this.projectList.push(newProject);
        var obj = {
            projectId: null,
            verticalId: <string>null,
            projectCode: <string>null,
            agency: <string>null,
            agencyAbbr: <string>null,
            Project_Name: name,
            projectAbbr: <string>null,
            projectDescription: <string>null,
            projectStatus: <string>null,
            positionDescription: <string>null,
            employees: employees
        };
        this.projectList.push( <Project>obj );
        this.projectService.addProject( name, manager, charge_code ).subscribe( ress => { console.log( "project added" ); } );




    }
    compareEmployee( a: Employee, b: Employee ): number {

        if ( a.allocatedHours > b.allocatedHours )
            return 1;
        else if ( a.allocatedHours < b.allocatedHours )
            return -1;
        else {
            if ( a.Last_Name > b.Last_Name )
                return 1;
            else if ( a.Last_Name < b.Last_Name )
                return -1;
            else
                return 0;
        }

    }
    public setEmployee( employee: Employee ): void {
        this.employee = employee;
    }
    moveEmployeeToEmployeeList( $event: any ) {
        let newEmployee: Employee = $event.dragData;
        let projectFrom: Project = this.projectFrom;
        let listEmployee = this.unassignedEmployeeList.find(x => x.Employee_Id == newEmployee.Employee_Id);
        
        if ( projectFrom != null ) {
            projectFrom.employees.filter(x => x.Employee_Id == newEmployee.Employee_Id).forEach(y => y.allocatedHours = 0);
            projectFrom.employees = projectFrom.employees.filter( item => item.Employee_Id != newEmployee.Employee_Id );
            listEmployee.allocatedHours = 0;
            this.projectList
            .filter(x => x.employees != null)
            .forEach(x => 
            {
                    x.employees.filter(y => y.Employee_Id == newEmployee.Employee_Id)
                    .forEach(y => listEmployee.allocatedHours += y.allocatedHours)
            });
            console.log( `project From(%s) employee list`, projectFrom.projectId );
        }

        this.unassignedEmployeeList = this.unassignedEmployeeList.sort( this.compareEmployee )


    }

    dragStart( p: Project, e: Employee ) {
        if ( p != null ) {
            console.log( "removing %s from %s", e.First_Name, p.Project_Name )
            this.projectFrom = p;

        }
    }
    addEmployeeToProject( $event: any, project: Project ) {

        let masterEmployee: Employee = $event.dragData;
        let projectEmployee: Employee = JSON.parse(JSON.stringify(masterEmployee)); //Deep Copy
 
        let projectTo: Project = project;
        let projectFrom: Project = this.projectFrom;

        console.log( "adding %s to %s", projectEmployee.First_Name, project.Project_Name );
        
        //Remove from previous project, employee list is not a project.
        if ( this.projectFrom != null ) {
            masterEmployee.allocatedHours = 0;
            this.projectFrom.employees = this.projectFrom.employees.filter( item => item.Employee_Id != projectEmployee.Employee_Id );
            console.log( `project From(%s) To(%s)`, this.projectFrom.projectId, projectTo.projectId );
        }
        
        //Update the Employee Allocation
        //TODO Set a real amount of time
        projectEmployee.allocatedHours = 4;
        projectTo.employees.push(projectEmployee);
        
        
        //Reset Allocation in employeeList;
        let listEmployee = this.unassignedEmployeeList.find(x => x.Employee_Id == masterEmployee.Employee_Id);
        listEmployee.allocatedHours = 0;
        this.projectList
            .filter(x => x.employees != null)
            .forEach(x => 
            {
                    x.employees.filter(y => y.Employee_Id == masterEmployee.Employee_Id)
                    .forEach(y => listEmployee.allocatedHours += y.allocatedHours)
            });
        
        //Sort the employee list
        this.unassignedEmployeeList = this.unassignedEmployeeList.sort( this.compareEmployee )
        
        console.log( "employees list: %s", projectTo.employees );

    }

    public getAllEmployees() {
        console.log( "getting all employees." )
        return this.projectService.getAllEmployees().subscribe( ress => {
            this.unassignedEmployeeList = ress.sort( this.compareEmployee );
            
            console.log( "employees ", this.unassignedEmployeeList );

        } );

    }

    public getListOfProject() {
        console.log( "getting list of projects" )

        return this.projectService.getAllProjects().subscribe( ress => {
            this.projectList = ress;
            this.projectList.forEach(x =>{ if(x.employees == null) x.employees = new Array<Employee>()});
	    this.getAssignedForEachProject();
        } );
    }

    public getAssignedForEachProject() {
        this.projectList.forEach((proj, index) => {
            this.getAllAssignedEmployees(proj.projectId, index);
        });
    }

    public getAllAssignedEmployees(pid: number, index: number) {
        return this.projectService.getAssignedEmployeesToProjectId(pid).subscribe(ress => {
            this.assignedEmployees = ress;
            this.projectList[index].employees = this.assignedEmployees;
            console.log("project list updated", this.projectList);
    });
}

    constructor(
        private projectService: ProjectService,
        private employeeService: EmployeeService,
        private router: Router,
        private route: ActivatedRoute ) {
        this.projectService = projectService;
    }

    ngOnInit() {
        this.getAllEmployees();
        this.getListOfProject();
    }
    public enableForm() {
        //Enables fields in project details form.

        //if statement required to determine which form id is active



        //if(document.getElementById("projectDetailsForm").style.display == "block"){
        if ( this.projectDetailsForm == "projectDetailsForm" ) {
            var name2 = <HTMLInputElement>document.getElementById( "name2" );
            var chargecode = <HTMLInputElement>document.getElementById( "chargecode2" );
            var manager = <HTMLInputElement>document.getElementById( "manager2" );
            var email = <HTMLInputElement>document.getElementById( "email2" );

            if ( name2.readOnly == true ) {
                name2.readOnly = false;
                //chargecode.readOnly=false;
                chargecode.disabled = false;
                manager.readOnly = false;
                email.readOnly = false;
            } else {
                name2.readOnly = true;
                chargecode.readOnly = true;
                manager.readOnly = true;
                email.readOnly = true;
            }
        }
        else if ( this.projectDetailsForm == "projectContactForm" ) {
            var contactName = <HTMLInputElement>document.getElementById( "contactName" );
            var contactPosition = <HTMLInputElement>document.getElementById( "contactPosition" );
            var preferredContact = <HTMLInputElement>document.getElementById( "preferredContact" );
            var altContact = <HTMLInputElement>document.getElementById( "altContact" );

            if ( contactName.readOnly == true ) {
                contactName.readOnly = false;
                contactPosition.readOnly = false;
                preferredContact.readOnly = false;
                altContact.readOnly = false;
            } else {
                contactName.readOnly = true;
                contactPosition.readOnly = true;
                preferredContact.readOnly = true;
                altContact.readOnly = true;
            }
        }
        else if ( this.projectDetailsForm == "projectChargeCodeForm" ) {

        }
        else {
            console.log( "Error @ projects.component.ts on line 112.  Broken pencil icon" );
        }


    }
    public setFieldReadOnly() {
        //projectDetailsForm
        var name2 = <HTMLInputElement>document.getElementById( "name2" );
        var chargecode = <HTMLInputElement>document.getElementById( "chargecode2" );
        var manager = <HTMLInputElement>document.getElementById( "manager2" );
        var email = <HTMLInputElement>document.getElementById( "email2" );

        //projectContactForm        
        //projectChargeCodeForm




        if ( name2.readOnly == false ) {
            name2.readOnly = true;
            chargecode.readOnly = true;
            manager.readOnly = true;
            email.readOnly = true;
        }

    }
    public removeElements() {
        //Remove "Project Details" Tab
        document.getElementById( "projectDetailsForm" ).style.display = "none";

        //Remove "Charge Codes" Tab
        document.getElementById( "projectChargeCodeForm" ).style.display = "none";

        //Remove "Contacts" Tab
        document.getElementById( "projectContactForm" ).style.display = "none";
    }

    public showEmployee() {
        this.removeElements();

        document.getElementById( "menuEmployee" ).style.border = "2px solid white";
        document.getElementById( "menuEmployee" ).style.backgroundColor = "#b6e3fd";

        document.getElementById( "menuProjectDetails" ).style.border = "none";
        document.getElementById( "menuProjectDetails" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuContacts" ).style.border = "none";
        document.getElementById( "menuContacts" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuChargeCodes" ).style.border = "none";
        document.getElementById( "menuChargeCodes" ).style.backgroundColor = "lightskyblue";

        //remove
        document.getElementById( "projectChargeCodeForm2" ).style.display = "block";
    }

    public showContacts() {
        document.getElementById( "menuContacts" ).style.border = "2px solid white";
        document.getElementById( "menuContacts" ).style.backgroundColor = "#b6e3fd";

        document.getElementById( "menuChargeCodes" ).style.border = "none";
        document.getElementById( "menuChargeCodes" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuProjectDetails" ).style.border = "none";
        document.getElementById( "menuProjectDetails" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuEmployee" ).style.border = "none";
        document.getElementById( "menuEmployee" ).style.backgroundColor = "lightskyblue";
        this.removeElements();
        this.projectDetailsForm = "projectContactForm";
        document.getElementById( "projectContactForm" ).style.display = "block";


        //also need to get the values for charge codes and make sure they are set to a variable


        //set unneeded items to not visible

    }
    public showChargeCodes() {
        document.getElementById( "menuChargeCodes" ).style.border = "2px solid white";
        document.getElementById( "menuChargeCodes" ).style.backgroundColor = "#b6e3fd";

        document.getElementById( "menuProjectDetails" ).style.border = "none";
        document.getElementById( "menuProjectDetails" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuContacts" ).style.border = "none";
        document.getElementById( "menuContacts" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuEmployee" ).style.border = "none";
        document.getElementById( "menuEmployee" ).style.backgroundColor = "lightskyblue";

        this.removeElements();
        this.projectDetailsForm = "projectChargeCodeForm";

        document.getElementById( "projectChargeCodeForm" ).style.display = "block";
    }
    public submitChanges() {
        this.normalizeProjectForm();

        //save changes to db
    }
    public normalizeProjectForm() {
        this.projectDetailsForm = "projectDetailsForm";

        this.removeElements();

        document.getElementById( "menuProjectDetails" ).style.border = "2px solid white";
        document.getElementById( "menuProjectDetails" ).style.backgroundColor = "#b6e3fd";

        document.getElementById( "menuChargeCodes" ).style.border = "none";
        document.getElementById( "menuChargeCodes" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuContacts" ).style.border = "none";
        document.getElementById( "menuContacts" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "menuEmployee" ).style.border = "none";
        document.getElementById( "menuEmployee" ).style.backgroundColor = "lightskyblue";

        document.getElementById( "projectDetailsForm" ).style.display = "block";

        var name2 = <HTMLInputElement>document.getElementById( "name2" );
        var chargecode = <HTMLInputElement>document.getElementById( "chargecode2" );
        var manager = <HTMLInputElement>document.getElementById( "manager2" );
        var email = <HTMLInputElement>document.getElementById( "email2" );

        if ( name2.readOnly == false ) {
            name2.readOnly = true;
            chargecode.readOnly = true;
            manager.readOnly = true;
            email.readOnly = true;
        }

    }
    public projDetailsGetChargeCode( chargeCode ) {

        if ( chargeCode == "Add New Charge Code" ) {
            this.removeElements();
            this.showChargeCodes();
            //At this point (once the charge codes tab is finished) enable new charge code.
            //add focus to it. set view/edit charge codes to read only

        }
        //        else{
        //            this.removeElements();
        //            this.showChargeCodes();
        //            
        //            //display information based on the charge code that is pulled from html
        //            var viewChargeCode = chargeCode;
        //        }

    }
    public getSize() {
        alert( "funrun" );
        console.log( this.contactList.length );
        return this.contactList.length;
    }

    public showProjectModal( projectId: number ) {
        this.projectService.getProjectById( projectId ).subscribe( ress => {
            this.currentproject = ress;
            console.log( "Received Project %s", this.currentproject.Project_Name );
        } );
    }


}
