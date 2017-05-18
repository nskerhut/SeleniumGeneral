import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component(
        {
            selector:'employee-detail',
            template:``
        })
export class Employee {
    Employee_Id: number;
    First_Name: string;
    Last_Name : string;
    Date_of_Birth: string;
    Personnel_Number: string;
    Workday_Position_Id: string;
    Seat_Location: string;
    Hire_Date: string;
    Termination_Date: string;
    Reports_To: string;
    Shortname: string;
    Office_Phone_Number: string;
    Mobile_Phone_Number: string;
    Company_Email: string;
    Personal_Email: string;

/*constructor(
        Employee_Id: number,
        First_Name: string,
    Last_Name : string) {
    this.Employee_Id = Employee_Id;
    this.First_Name = First_Name;
    this.Last_Name = Last_Name;
}*/
constructor(
        Employee_Id?: number,
        First_Name?: string,
    Last_Name?: string,
    Date_of_Birth?: string,
    Personnel_Number?:string,
    Workday_Position_Id?: string,
    Seat_Location?: string,
    Hire_Date?: string,
    Termination_Date?: string,
    Reports_To?: string,
    Shortname?: string,
    Office_Phone_Number?: string,
    Mobile_Phone_Number?: string,
    Company_Email?: string,
    Personal_Email?: string){
    
    this.Employee_Id = Employee_Id;
    this.First_Name = First_Name;
    this.Last_Name = Last_Name;
    this.Date_of_Birth = Date_of_Birth;
    this.Personnel_Number = Personnel_Number;
    this.Workday_Position_Id = Workday_Position_Id;
    this.Seat_Location = Seat_Location;
    this.Hire_Date = Hire_Date;
    this.Termination_Date = Termination_Date;
    this.Reports_To = Reports_To;
    this.Shortname = Shortname;
    this.Office_Phone_Number = Office_Phone_Number;
    this.Mobile_Phone_Number = Mobile_Phone_Number;
    this.Company_Email = Company_Email;
    this.Personal_Email = Personal_Email;
}
}