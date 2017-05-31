import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { UserService } from './service/user.service';
import {RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NgUploaderModule} from 'ngx-uploader';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthComponent } from './components/auth/auth.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { CanActivateAuthGuard } from './components/auth/can-activate.authguard';
import { PasswordComponent } from './components/password/password.component';
import { EmployeeService } from './service/employeeservice.service';
import { ProjectService } from './service/projectservice.service';
import { EmployeeComponent } from './components/employee/employee.component';
import {Ng2DragDropModule} from "ng2-drag-drop";
import { Component, NgZone, Inject } from '@angular/core';

import { ProjectsComponent } from './components/projects/projects.component';
import { Employee } from './model/employee'
import { Project } from './model/project'
import { AllocatedHours } from './components/projects/projects-allocatedHours.component';
import {DndModule} from 'ng2-dnd';
import {ModalModule} from 'ngx-bootstrap/modal';
import { EmployeeHandleComponent } from './components/employee-handle/employee-handle.component';
import { ContextMenuModule } from 'ngx-contextmenu';

const appRoutes: Routes = [
    {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'authorize',
    component:AuthComponent
  },

  {
    path: 'password',
  component:PasswordComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path: '404',
    component:NopageComponent
  },
  {
    path: 'register',
    component:RegisterComponent, canActivate: [CanActivateAuthGuard]
  },
  {
     path: 'user/:id',
     component:UserComponent, canActivate: [CanActivateAuthGuard]
   },
   {
     path: 'about',
     component:AboutComponent
   },
   
  {
     path: '**', redirectTo: '404'
   }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserComponent,
    NavComponent,
    AuthComponent,
    NopageComponent,
    RegisterComponent,
    PasswordComponent,
    AboutComponent,
    EmployeeComponent,
    ProjectsComponent,
    EmployeeHandleComponent,
    AllocatedHours
  ],
  imports: [
    FlashMessagesModule,
    NgUploaderModule,
    Ng2DragDropModule,
    BrowserModule,
    DndModule.forRoot(),
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ContextMenuModule
  ],
  providers: [
              UserService, 
              EmployeeService,  
              CanActivateAuthGuard, 
              ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
