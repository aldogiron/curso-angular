import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
