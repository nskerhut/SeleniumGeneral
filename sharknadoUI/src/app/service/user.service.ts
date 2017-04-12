import { OnInit,Component, Input, Output } from '@angular/core';
import { Injectable, EventEmitter }  from '@angular/core';
import { Http, Response, Headers,ResponseOptions, RequestOptions, RequestOptionsArgs, Request, RequestMethod } from '@angular/http';
import { JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { NavComponent } from '../components/nav/nav.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class UserService{
    public loginEvent : EventEmitter<boolean> = new EventEmitter();
    public adminEvent : EventEmitter<boolean> = new EventEmitter();
    public managerEvent : EventEmitter<boolean> = new EventEmitter();
    nav: NavComponent;
    body: string;
    baseURL: string;
    res: Object;
    profile_view: User;
    _userId: string;
    _password: string;
    _stringBool: string;
    constructor(private http: Http) {
         var obj;
         this.http=http;
         this.baseURL='http://localhost:8050/api/v1/user/';
    }
    
    ngOnInit(){
      this._userId ="";
      this._stringBool="";
      this._password="";
    }
    private extractData(res: Response) {
        let body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    }
    public login(username: string,password: string): Observable<loginCredential>{
      let headers = new Headers({ "Content-Type": "application/json" });
      let options = new RequestOptions({headers: headers});
       return this.http.post(this.baseURL+'login',
         JSON.stringify({
           username: username,
           password: password
         }),
         options).map((res: Response) => <loginCredential>res.json())
         .catch(this.handleError);
    }


    public changePassword(currentpassword: string,newpassword:string,userId: string):Observable<changePassword>{
      let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken()});
      let options = new RequestOptions({headers: headers});
       return this.http.post(this.baseURL+'changePassword',
         JSON.stringify({
           password: currentpassword,
           newPassword: newpassword,
           userId: userId
         }),
         options).map((res: Response) => <changePassword>res.json())
         .catch(this.handleError);

    }

    public getToken(): String{
      let token = sessionStorage.getItem('currentUser');
      return token ? token : "";
    }

    public isLoggedIn(): boolean {

      var currentUser = sessionStorage.getItem('currentUser');
      var token: String = this.getToken();

      const jwtHelper = new JwtHelper();

      try {
        return currentUser != null && !jwtHelper.isTokenExpired(currentUser);
      } catch (URIError) {
        return false;
      }
    }

    public getUser(userId: string): Observable<User>{
      let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken()});
      let options = new RequestOptions({headers: headers});
      this._stringBool = "false";
       return this.http.post(this.baseURL+'view',
         JSON.stringify({
           userId: userId
         }),
         options).map((ress: Response) => <User>ress.json())
         .catch(this.handleError);
    }

    public setUser(firstName: any, lastName : any, email: any,
				 username: any,  userId: any){
           let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken()});
           let options = new RequestOptions({headers: headers});
           return this.http.post(this.baseURL+'update',
             JSON.stringify({
               firstName: firstName,
               lastName : lastName,
                email: email,
           				 username: username,
                         userId: userId
             }),
             options).map((resss: Response) => <Result>resss.json())
             .catch(this.handleError);
        }

    private handleError(error:any): Promise<Object> {
      console.log("error: ", error);
      return Promise.reject(error.message || error);
    }

    public registerUser(username: string,password: string,email: string,firstName: string,lastName: string,role: string){
      let headers = new Headers({ "Content-Type": "application/json",
                                  "Authorization": "Bearer " + this.getToken()});
      return this.http.post(this.baseURL+'register',
         JSON.stringify({
           username: username,
           password: password,
           email: email,
           firstName: firstName,
           lastName: lastName,
           role: role
         }),
         {headers})
       .subscribe(res => this.res = res.json());
    }
    // public getTable(username: string,password: string): Observable<Response>{
    //
    //   let headers = new Headers({ "Content-Type": "application/json" });
    //   let options = new RequestOptions({headers: headers});
    //
    //   console.log(headers.get('Content-Type'));
    //   console.log("this is UserService");
    //    return this.http.post(this.baseURL+'login',
    //      JSON.stringify({
    //        username: username,
    //        password: password
    //      }),
    //      options).map((res: Response) => {
    //      console.log("JSON is: " + res.json());
    //     return res;
    //   }).catch(this.handleError);
    // }
}
interface User{
  First_Name: string,
  Last_Name : string,
  Email: string,
  Username: string,
}

interface loginCredential{
     success: string,
     userId: string,
     role: string,
     token: string
}
interface Result{
  First_Name: string,
  Last_Name : string,
  Email: string,
  Username: string,
  userId: string
}

interface changePassword{
Status: boolean;
}

/**
     loadUsers() {
       fetch('/api/v1/user').then((response) => {
         return response.json();
       }).then((data) => {
         this.users = data;
       }).catch((ex) => {
         console.error('Error fetching users', ex);
       });
     }
**/