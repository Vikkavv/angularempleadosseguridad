import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let token = sessionStorage.getItem("token");
    if(token)
      return true;
    return this._router.createUrlTree(['/login'],
      {queryParams: {returnUrl: state.url}}
    )
  }
}
