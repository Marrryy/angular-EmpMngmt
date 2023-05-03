import { Injectable } from '@angular/core';
import { UserModel, LoginModel } from '../model/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUserLoggedIn() {
      if (sessionStorage.getItem('IsLoggedin')) {
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

      return authToken;
  }

  // set token and isLoggedin
  setAuthToken(authToken: LoginModel) {
      sessionStorage.setItem('Username', authToken.username);
      sessionStorage.setItem('IsLoggedin', 'true');
  }

  // clear token
  clearAuthToken() {
      sessionStorage.removeItem('Username');
      sessionStorage.removeItem('IsLoggedin');
  }
}
