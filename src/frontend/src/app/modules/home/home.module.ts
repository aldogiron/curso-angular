import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent ]
})
export class HomeModule { }
