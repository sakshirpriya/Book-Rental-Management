import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('access_token'))
      {
        return true;
      }
      else{
        Swal.fire({
        title: "Warning!",
        text: "You are currently not logged in. Please log in!",
        icon: "warning",
        })
        this.router.navigate(['/login'])
        return false
      }
  }
  
}
