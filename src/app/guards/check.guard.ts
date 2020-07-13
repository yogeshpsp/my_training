import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanActivate {
  user={
    role:'YOGESH'
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(next.data[0]==this.user.role){
    return true;
      }
      else{
        return false;
        
      }
  }
  
}
