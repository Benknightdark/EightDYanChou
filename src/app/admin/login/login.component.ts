import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  // tslint:disable-next-line:member-ordering
  user: Observable<firebase.User>;
    // tslint:disable-next-line:member-ordering
    emails="";
  // tslint:disable-next-line:member-ordering
  password="";

  ngOnInit() {

}
onclick(){
     // this.afAuth.auth.signInWithEmailAndPassword(this.emails, this.password).then(a => console.log(a));
}
onSubmit(f){

}

}
