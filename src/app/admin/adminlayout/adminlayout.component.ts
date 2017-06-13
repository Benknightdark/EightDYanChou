import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private account:AccountService) { }

  ngOnInit() {

   ( $(".button-collapse") as any).sideNav('show');



  }
  onClick(){
  this.account.Logout()
  }

}
