import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from "angularfire2/auth";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
     AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule

  ],
  declarations: [EventmanageComponent, LoginComponent]
})
export class AdminModule { }
