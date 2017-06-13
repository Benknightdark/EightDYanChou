import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ShowEventData: Observable<any>
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.ShowEventData = this.db.list("/EventData", {
      query: {
        orderByChild: 'CreateTime',
      }
    }).map((arr) => arr.reverse());
  }
  onShareEvent(url) {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + url + ";src=sdkpreparse")
  }
  onSignUpEvent(url) {
    window.open(url)
  }

}
