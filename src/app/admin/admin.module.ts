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
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import {ImageUploadModule} from 'angular2-image-upload';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
     AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
     ImageUploadModule.forRoot()

  ],
  declarations: [EventmanageComponent, LoginComponent, PagemanageComponent, AdminlayoutComponent],
  providers:[AccountService,AccountGuard]
})
export class AdminModule { }
