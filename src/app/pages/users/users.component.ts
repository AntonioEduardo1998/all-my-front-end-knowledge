import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
