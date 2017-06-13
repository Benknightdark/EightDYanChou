import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AccountGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if( localStorage.getItem("token")){
  return true
}else{
  this.router.navigate(['/admin/login'])
}
// tslint:disable-next-line:prefer-const
// let isLogin;
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         console.log("User is logined", user);
//         firebase.auth().currentUser.getToken(true).then(function (idToken) {
//           user.idToken = idToken;
//           console.log("取得 ID Token", idToken);
//              this.router.navigate(['admin/pagemanage'])
//          // return true;
//         }).catch(function (error) {
//           console.log(error)
//            isLogin=false;
//          this.router.navigate(['admin/login'])
//         });
//         isLogin=true;
//       } else {

//    isLogin=false;
//         console.log("User is not logined yet.");
//       this.router.navigate(['admin/login'])
//       }
//     });

// return isLogin;

  }
}
