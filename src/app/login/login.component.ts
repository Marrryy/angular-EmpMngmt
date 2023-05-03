import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../model/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  @Input()
  // For user testing easily only.
  login: LoginModel = {username : "Mary", userpwd : "TechTest"};
  // login: LoginModel = new LoginModel();
  loginMsg : any;

  constructor(public router: Router, public userService: AuthService) {
  }

  ngOnInit() {
    if(this.userService.getUserLoggedIn()){
      this.router.navigate(['/employee'])
    }
  }

  onLogin(){
    if(this.userService.validateEmail(this.login))
    {
        this.userService.setAuthToken(this.login);
        this.router.navigate(['/employee']);
    }else{
      this.loginMsg = "Wrong User Login";
    }
  }
}
