import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private userService: UserService
  ){}

  ngOnInit() {
  }


}
interface Res{
  passed: string
}
