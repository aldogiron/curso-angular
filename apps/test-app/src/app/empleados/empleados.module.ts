import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosEditarComponent } from './empleados-editar/empleados-editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [EmpleadosCrearComponent, EmpleadosEditarComponent],
  declarations: [EmpleadosCrearComponent, EmpleadosEditarComponent]
})
export class EmpleadosModule { }
