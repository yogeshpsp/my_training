import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanActivate {
  data: any;
  next: any;

  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role');
   
    if (this.next.data.find((d) => { return d === role })) {
      return true;
    }
    else {
      this.router.navigate(['pagenotfound'], { queryParams: { message: 'Unauthorized' } });
      return false;

    }
  }

}
