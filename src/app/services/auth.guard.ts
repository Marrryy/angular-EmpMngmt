import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService} from '../services/auth.service';
import { LoginModel } from '../model/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  model: LoginModel;

  constructor(private router: Router,
              private authService: AuthService,
          ) {
              this.model = new LoginModel()
          }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (this.authService.getUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'],
      { queryParams: {redirectto: state.url} });
      return false;
  }
}
