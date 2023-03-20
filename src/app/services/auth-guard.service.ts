import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";
  
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
            
        var isAuthenticated = this.authService.islogin();
        if (!isAuthenticated) {
          this.router.navigateByUrl("login");
        }
        return isAuthenticated;

    }
}