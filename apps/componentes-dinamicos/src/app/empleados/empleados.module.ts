import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
  ],
  declarations: [
    EmpleadosCrearComponent,
  ],
})
export class EmpleadosModule { }
