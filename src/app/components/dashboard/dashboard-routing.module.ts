import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './abm/abm.component';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component: DashboardComponent},
  {path: 'abm',component: AbmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
