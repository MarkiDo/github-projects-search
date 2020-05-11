import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public dialog: MatDialog) {
  }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

    const password = localStorage.getItem('password')

    if (password) {
      return true;
    }
    const dialogLogin = this.dialog.open(LoginComponent, { disableClose: true })
    dialogLogin.afterClosed().subscribe(arg => {
      if (arg) {
        location.reload();
      } else {
        this.router.navigate(['/']);
      }
    });

    return true;
  }
}
