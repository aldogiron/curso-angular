import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {

  public url: string;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const routeRoles = next.data.roles as string[];
      const userInfo = sessionStorage.getItem('usuario')

      console.log(state.url, routeRoles);
    if (!userInfo) {
      this.url = state.url;
      this.router.navigate(['/login']);
      return false;
    }

    return this.http.get<string[]>('http://localhost:5000/api/autenticacion/roles')
      .map(roles => {

        for (const routeRole of routeRoles) {
          if (roles.indexOf(routeRole) !== -1) {
            return true;
          }
        }

        return false;

      });
  }
}
