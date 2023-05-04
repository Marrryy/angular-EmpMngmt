import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../model/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  form!: FormGroup;

  name:any;

  constructor(public router: Router, public userService: AuthService) {

  }
  ngOnInit() {
    if(this.userService.getUserLoggedIn()){
      this.router.navigate(['/employee'])
    }

    this.form = new FormGroup({
      email: new FormControl(this.login.username, [
        Validators.required,
      ]),
      password: new FormControl(this.login.userpwd, Validators.required)
    });

    console.log(this.form)
  }

  onLogin(){
    console.log(this.login)
    if(this.userService.validateEmail(this.login))
    {
        this.userService.setAuthToken(this.login);
        this.router.navigate(['/employee']);
    }else{
      this.loginMsg = "Wrong User Login";
    }
  }
}
