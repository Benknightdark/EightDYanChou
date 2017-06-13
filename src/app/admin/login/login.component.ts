import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  afAuth: AngularFireAuth,private db: AngularFireDatabase ,private account:AccountService) {
  }

  // tslint:disable-next-line:member-ordering
  user: Observable<firebase.User>;
  // tslint:disable-next-line:member-ordering
  email = "";
  // tslint:disable-next-line:member-ordering
  password = "";
loginUser
  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    this.loginUser = user;
    console.log("User is logined", user);
    firebase.auth().currentUser.getToken(true).then(function(idToken) {
      this.loginUser.idToken = idToken;
      console.log("取得 ID Token",idToken);

    }).catch(function(error) {
      // Handle error

    });
  } else {
    this.loginUser = null;
    console.log("User is not logined yet.");
  }
});


  }

  onSubmit(f) {
    this.account.Login(this.email, this.password);
    // this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    // .then(a => console.log(a.uid))
    // .catch(err => console.log(err));

  }


}
