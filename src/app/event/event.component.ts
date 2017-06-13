import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onShareEvent() {
window.open("https://www.facebook.com/sharer/sharer.php?u=https://docs.google.com/forms/d/1juE7N44SuROXCPYpSEqGl9C7FAYPgL4zDfHEaoAHTpE/viewform?edit_requested=true;src=sdkpreparse")
  }
  onSignUpEvent() {
    window.open("http://goo.gl/PJ1yub")
  }

}
