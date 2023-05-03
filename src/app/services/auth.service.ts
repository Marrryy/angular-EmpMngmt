import { Injectable } from '@angular/core';
import { UserModel, LoginModel } from '../model/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : UserModel = new UserModel();
  getUserLoggedIn() {
      if (sessionStorage.getItem('IsLoggedin')) {
          return true;
      }
      return false
  }

  validateEmail(login: LoginModel) {
    // It should be another service to manage login validation.
    // Which calling the backend api, but currently hard code its ok to put in here.
    if (login.username == "Mary" && login.userpwd == "TechTest" ) {
        return true;
    }
    return false
  }
  // LocalStorege
  getAuthToken(): UserModel {
      let authToken: UserModel = new UserModel();
      if(sessionStorage.getItem('Username')!== null ){
        let usn = sessionStorage.getItem('Username');
        authToken.username = usn!=null?usn:"";
      }
      this.user = authToken

      return authToken;
  }

  // set token and isLoggedin
  setAuthToken(authToken: LoginModel) {
      sessionStorage.setItem('Username', authToken.username);
      sessionStorage.setItem('IsLoggedin', 'true');

      this.getAuthToken()
  }

  // clear token
  clearAuthToken() {
      sessionStorage.removeItem('Username');
      sessionStorage.removeItem('IsLoggedin');

      this.user = new UserModel;
  }
}
