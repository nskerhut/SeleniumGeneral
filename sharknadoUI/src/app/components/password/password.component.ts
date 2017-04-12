import { Component, OnInit } from '@angular/core';
import {EventEmitter, Input, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../../service/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
currentpassword : string; 
newpassword : string;
temp : string;
tempnewpass:string;
data: passCredential;
userId: string;
  constructor(
    private flashMessagesService: FlashMessagesService,
    private userService : UserService
  ) { 
    this.userId = this.userService._userId
  }

  ngOnInit() {
  }
changepass (tempnewpass, currentpassword, newpassword){
  console.log("this is changepass: ",currentpassword);
  console.log("temp: ",tempnewpass);
  console.log("newpassword: ",newpassword);
  console.log("currentpass: ",currentpassword);
  
  this.temp=this.userService._password;
  if (this.temp == currentpassword){
    if(tempnewpass == newpassword){
  this.userService.changePassword(currentpassword, newpassword, this.userId).subscribe( res => {this.data = res;       
                        ;});
this.flashMessagesService.show('You Have Changed Your Password!', { cssClass: 'alert alert-dismissible alert-info', timeout: 2500 });
        
}
else{
  this.flashMessagesService.show('New Password and Verification Do Not Match', { cssClass: 'alert alert-dismissible alert-info', timeout: 2500 });
 }
 
} 
 else{
    this.flashMessagesService.show('Current Password is Incorrect', { cssClass: 'alert alert-dismissible alert-info', timeout: 2500 });
 }
 

  }
  
}
interface passCredential{
 Status: boolean;
}