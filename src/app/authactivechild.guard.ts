import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ActiveChild implements CanActivateChild{
    constructor(private rout:Router){

    }
    canActivateChild():  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
        
        const data=Math.random()
        console.log(data);
   
        if(data>0.5)
        {
            return true
        }
        else{
            alert("you cant to got this rout")
            return this.rout.createUrlTree(['/dashboard']);
        }
        
        
    }
}




