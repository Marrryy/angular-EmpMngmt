import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserModel } from './model/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Employee Management';

  constructor(
    public router: Router,
    public userService: AuthService,
    ) {
  }

  ngOnInit(): void {
    this.userService.getAuthToken()
  }

  logout(){
    this.userService.clearAuthToken();
    this.router.navigate(['/login']);
  }
}
