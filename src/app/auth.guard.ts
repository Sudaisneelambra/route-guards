import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Replace this with your authentication logic
      const isAuthenticated = Math.random()
      console.log(isAuthenticated);
      
  
      if (isAuthenticated>0.5) {
        return true; // User is authenticated, allow access to the route
      } else {
        // Redirect to the login page
        return this.router.createUrlTree(['/login']);
      }
    }
  }