import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './admin/login/login.component';
import { EventmanageComponent } from './admin/eventmanage/eventmanage.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
{
      path: "", component: IndexComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
