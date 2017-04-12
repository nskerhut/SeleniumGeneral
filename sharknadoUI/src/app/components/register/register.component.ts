import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
    


  constructor(
    private userService: UserService,
    private flashMessagesService: FlashMessagesService
    ){}

  ngOnInit() {
  }
  
  register(username: string,password: string,email: string,firstName: string,lastName: string,role: string ){
    this.userService.registerUser(this.username,this.password,this.email,this.firstName,this.lastName,this.role)

  }
  success(){
    this.flashMessagesService.show('You have successfully registered a user!', { cssClass: 'alert-success alert alert-info .close', timeout: 2500 });
  }
  cancel(){
    this.flashMessagesService.show('You have canceled registering user', { cssClass: 'alert-fail alert alert-info .close', timeout: 2500 });
  }

}
