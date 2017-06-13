import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
@Injectable()
export class AccountService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }
  Login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(a => {
        if (a.uid) {
          this.router.navigate(["/admin/pagemanage"])
        } else {
          confirm(a.message)
        }
      }

      )
      .catch(err => confirm(err.message));
  }
  Logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/admin/login"])

  }

}