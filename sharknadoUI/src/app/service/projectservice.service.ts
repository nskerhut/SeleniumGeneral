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
}
