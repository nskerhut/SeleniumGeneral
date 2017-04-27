import {OnInit,Component, Input, Output } from '@angular/core';
import { Injectable, EventEmitter }  from '@angular/core';
import {Http, Response, Headers,ResponseOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class ProjectService{
    body: string;
    baseURL: string;

    constructor (private http: Http) {
        var obj;
        this.http=http;
        this.baseURL='http://localhost:8051/api/v1/employee/';
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
    
}