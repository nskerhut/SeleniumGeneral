import {OnInit,Component, Input, Output } from '@angular/core';
import { Injectable, EventEmitter }  from '@angular/core';
import {Http, Response, Headers,ResponseOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Employee } from '../model/employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService{
    public adminEvent : EventEmitter<boolean> = new EventEmitter();
    public managerEvent : EventEmitter<boolean> = new EventEmitter();
    body: string;
    baseURL: string;
    res: Object;
    profile_view: Employee;
    _employeeId: string;
    _stringBool: string;
    token: string;

    constructor(private http: Http) {
         var obj;
         this.http=http;
         this.baseURL='http://localhost:8051/api/v1/employee/';
    }

    ngOnInit(){
      this._employeeId ="";
      this._stringBool="";

    }

    private extractData(res: Response) {
        let body;
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

   public getToken(): String{
      let token = sessionStorage.getItem('currentUser');
      return token ? token : "";
    }

	/*public getUserId(): String{
		let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken() });
		let options = new RequestOptions({headers: headers});
		
		return this.http.post(this.baseURL+'get_id',
         JSON.stringify({
           token: this.getToken()
         }),
	}*/
    public getEmployee(employeeId: string): Observable<Employee>{
      console.log("this is getEmployee empID", this._employeeId);
      let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken() });
      let options = new RequestOptions({headers: headers});
     

       return this.http.post(this.baseURL+'get_employee',
         JSON.stringify({
           User_Id: this._employeeId,
           token: this.token
         }),
         options).map((ress: Response) => <Employee>ress.json())
         .catch(this.handleError);
    }
    
    public getAllEmployee (): Observable<Array<Employee>> {
         console.log("Retrieving all employees.")
        return this.http.get(this.baseURL+'get_all_employees')
        .map((ress: Response) => <Array<Employee>> ress.json())
        .catch(this.handleError);
    }
    
    public setEmployee(
      employId: number,
      dateOfBirth: any,
      seatLocation: any,
      officePhoneNumber: any,
      mobilePhoneNumber: any,
      personalEmail: any,
      ){
        console.log("this is updating employeeId", employId);
           let headers = new Headers({ "Content-Type": "application/json",
                                       "Authorization": "Bearer " + this.getToken()});
           let options = new RequestOptions({headers: headers});
           return this.http.post(this.baseURL+'modify',
             JSON.stringify({
                User_Id: employId,
                dateOfBirth: dateOfBirth,
                seatLocation: seatLocation,
                officePhoneNumber: officePhoneNumber,
                mobilePhoneNumber: mobilePhoneNumber,
                personalEmail: personalEmail,
             }),
             options).map((resss: Response) => <Result>resss.json())
             .catch(this.handleError);
        }


    private handleError(error:any): Promise<Object> {
      console.log("error: ", error);
      return Promise.reject(error.message || error);
    }



    // public getTable(employeename: string,password: string): Observable<Response>{
    //
    //   let headers = new Headers({ "Content-Type": "application/json" });
    //   let options = new RequestOptions({headers: headers});
    //
    //   console.log(headers.get('Content-Type'));
    //   console.log("this is EmployeeService");
    //    return this.http.post(this.baseURL+'login',
    //      JSON.stringify({
    //        employeename: employeename,
    //        password: password
    //      }),
    //      options).map((res: Response) => {
    //      console.log("JSON is: " + res.json());
    //     return res;
    //   }).catch(this.handleError);
    // }


}

/*interface Employee{
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
}*/

// interface loginCredential{
//      success: string,
//      employeeId: string,
//      role: string
// }

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
/**

     loadEmployees() {
       fetch('/api/v1/employee').then((response) => {
         return response.json();
       }).then((data) => {
         this.employees = data;
       }).catch((ex) => {
         console.error('Error fetching employees', ex);
       });
     }
**/

/**
 * 
 * 
 * 
 */
