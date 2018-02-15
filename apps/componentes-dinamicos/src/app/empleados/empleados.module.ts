import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpleadosCrearComponent],
  exports: [EmpleadosCrearComponent]
})
export class EmpleadosModule { }
