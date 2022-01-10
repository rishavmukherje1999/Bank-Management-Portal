import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AdminService } from './Admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adm:AdminService,private router:Router)
  {
    
  }
  canActivate()
  {
    if(this.adm.IsLoggedIn())
    {
    return true;
    }
       this.router.navigate(['home']);
  
  return false;
}
}
