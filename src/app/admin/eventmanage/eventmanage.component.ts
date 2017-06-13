import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-eventmanage',
  templateUrl: './eventmanage.component.html',
  styleUrls: ['./eventmanage.component.css']
})
export class EventmanageComponent implements OnInit {

  constructor(private  afAuth: AngularFireAuth,private db: AngularFireDatabase,private router:Router) { }

  ngOnInit() {
  //  this.db.list('/test').subscribe(a=>console.log(a))
  }
onLogout(){

this.afAuth.auth.signOut();
    localStorage.removeItem("token")
this.router.navigate(['/admin/login'])
}

}
