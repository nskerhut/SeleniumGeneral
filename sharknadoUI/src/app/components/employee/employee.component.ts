import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employeeservice.service';
import {EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {
  fields: String[];
  employee: Employee;
  id: any;
  employeeId: string;
  loginBool : boolean;
  toggleBool: boolean = false;
  profileBool: boolean = true;
  result: Object;
  

  constructor(
    private employeeService: EmployeeService,
    private router : Router,
    private route:ActivatedRoute
  ) {
    
    this.employee = <Employee>{};
    this.result=<Result>{};
    this.employeeService = employeeService;
    this.employeeId = this.employeeService._employeeId;
   
    console.log("this is empService_employeeID");
    console.log(this.employeeService._employeeId);
    this.getEmployee();
    this.id = this.route.snapshot.params['id'];

   }

  ngOnInit() {
  }

  public getEmployee(){
    console.log("this is getter employee");
    return this.employeeService.getEmployee(this.employeeId).subscribe(ress => {this.employee = ress;
                                  console.log("employee ", this.employee);
  });
}
  
  public updateEmployee(
    Date_of_Birth: any,
    Seat_Location: any,
    Office_Phone_Number: any,
    Mobile_Phone_Number: any,
    Personal_Email: any){
  this.toggle();
    let User_Id = Number(this.employeeId);
    return this.employeeService.setEmployee(
      User_Id,
      Date_of_Birth,
      Seat_Location,
      Office_Phone_Number,
      Mobile_Phone_Number,
      Personal_Email,
      )
      .subscribe(resss => {this.result = resss;
  });
  }
  public toggle(){
    if(this.toggleBool == true){
      this.profileBool = true;
      this.toggleBool = false;
    }
    else{
      this.profileBool = false;
      this.toggleBool = true;
    }
  }

}

interface Employee{
  First_Name: string,
  Last_Name : string,
  Date_of_Birth: string,
  Personnel_Number: string,
  Workday_Position_Id: string,
  Seat_Location: string,
  Hire_Date: string,
  Termination_Date: string,
  Reports_To: string,
  Shortname: string,
  Office_Phone_Number: string,
  Mobile_Phone_Number: string,
  Company_Email: string,
  Personal_Email: string,
}
interface Result{
  First_Name: string,
  Last_Name : string,
  Date_of_Birth: string,
  Personnel_Number: string,
  Workday_Position_Id: string,
  Seat_Location: string,
  Hire_Date: string,
  Termination_Date: string,
  Reports_To: string,
  Shortname: string,
  Office_Phone_Number: string,
  Mobile_Phone_Number: string,
  Company_Email: string,
  Personal_Email: string,
}
