import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { PagemanageComponent } from './pagemanage/pagemanage.component';
import { AccountService } from '../services/account.service';
import { AccountGuard } from '../guard/account.guard';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
     AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule

  ],
  declarations: [EventmanageComponent, LoginComponent, PagemanageComponent],
  providers:[AccountService,AccountGuard]
})
export class AdminModule { }
