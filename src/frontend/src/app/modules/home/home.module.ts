import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './home-routing.module';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormLayoutComponent } from '../../components/form-layout/form-layout.component';
import { CommonModule } from '@angular/common';
import { ClieckerDirective } from '../../directives/clicker/clicker.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    CrearComponent,
    EditarComponent,
    FormLayoutComponent,
    ClieckerDirective
  ]
})
export class HomeModule { }
