import {OnInit,Component, Input, Output } from '@angular/core';
import { Injectable, EventEmitter }  from '@angular/core';
import {Http, Response, Headers,ResponseOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Employee } from '../model/employee';
import { Project } from '../model/project';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProjectService{
    body: string;
    baseURL: string;
    res: Object;

    constructor (private http: Http) {
        var obj;
        this.http=http;
        this.baseURL='http://localhost:8052/api/v1/project/';
    }
    ngOnInit(){

      }
    
    private extractData(res: Response) {
        let body;
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }  
    public addProject(name:string, manager:string, charge_code:string){
        console.log("adding project %s", name)
      let headers = new Headers({ "Content-Type": "application/json"});
      let options = new RequestOptions({headers: headers});
       return this.http.post(this.baseURL+'create',
         JSON.stringify({Project_Name: name}),
         options).map((res: Response) => <Project> res.json())
         .catch(this.handleError)

    }



    public getAllUnassignedEmployee (): Observable<Array<Employee>> {
        console.log("Retrieving all unsigned employees.")
       return this.http.get(this.baseURL+'employee/unassigned/get')
       .map((ress: Response) => <Array<Employee>> ress.json())
       .catch(this.handleError);
   }

   public getAllProjects (): Observable<Array<Project>> {
       console.log("Retrieving list of all projects.")
       return this.http.get(this.baseURL+'projects/get')
       .map((ress: Response) => <Array<Project>> ress.json())
       .catch(this.handleError);
   }
    
    private handleError(error:any): Promise<Object> {
        console.log("error: ", error);
        return Promise.reject(error.message || error);
      }
    public getToken(): String{
      let token = sessionStorage.getItem('currentUser');
      return token ? token : "";
    }
public getProjectById(project_Id:number):Observable<Project>{
        
    let headers = new Headers({ "Content-Type": "application/json"});
    let options = new RequestOptions({headers: headers});
        
    console.log("Retrieving all projectbyId(%s).",project_Id); 
        
    return this.http.post(this.baseURL+'get_project_by_id'
        ,JSON.stringify({"projectId": project_Id}),
         options)
       .map((ress: Response) => <Project> ress.json())
       .catch(this.handleError);

}    
    }
