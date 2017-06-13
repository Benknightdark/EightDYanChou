import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventgallary',
  templateUrl: './eventgallary.component.html',
  styleUrls: ['./eventgallary.component.css']
})
export class EventgallaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
       ($('.carousel.carousel-slider') as any).carousel({fullWidth: true});
    });
  }

}
