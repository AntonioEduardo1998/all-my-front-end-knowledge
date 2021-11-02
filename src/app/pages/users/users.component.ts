import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  public users = this.userService.getUsers();

  constructor(private userService: UserService, private router: Router) { }

  public navigateToUserConfig(userId: string): void {
    this.router.navigate(['/user-config', userId]);
  }

}
