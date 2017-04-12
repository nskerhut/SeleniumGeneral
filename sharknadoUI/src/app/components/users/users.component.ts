import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[];
  // constructor(private userService: UserService) {
  //   this.userService.getJSON().subscribe(users =>{
  //       this.users = users;
  //   }) }

  ngOnInit() {

    
  }
  constructor(
        private userService: UserService
  ){}



}

interface User{
    username: string,
    password: string,
    email: string
}
