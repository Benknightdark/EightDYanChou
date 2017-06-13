import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PagemanageComponent } from './pagemanage/pagemanage.component';
import { AccountGuard } from '../guard/account.guard';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: LoginComponent },
           { path: "login", component: LoginComponent },
           {path:"",component:AdminlayoutComponent,children:[
{ path: "eventmanage", component: EventmanageComponent,canActivate:[AccountGuard] },
          { path: "pagemanage", component: PagemanageComponent ,canActivate:[AccountGuard]}

           ]}



     // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [LoginGuard] },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
