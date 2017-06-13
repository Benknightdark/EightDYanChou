import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule

  ],
  declarations: [EventmanageComponent, LoginComponent]
})
export class AdminModule { }
