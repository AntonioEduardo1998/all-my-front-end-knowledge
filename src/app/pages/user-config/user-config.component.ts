import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  constructor(private router: Router) { }

  navigateBack(): void {
    this.router.navigate(['/']);
  }

}
