import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';
import { EmpleadosEditarComponent } from './empleados-editar/empleados-editar.component';
import { EmpleadosListarComponent } from './empleados-listar/empleados-listar.component';
import { ServiciosModule } from '../servicios/servicios.module';
import { EmpleadosRoutingModule } from './empleados-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiciosModule,
    EmpleadosRoutingModule,
  ],
  exports: [EmpleadosCrearComponent, EmpleadosEditarComponent, EmpleadosListarComponent],
  declarations: [EmpleadosCrearComponent, EmpleadosEditarComponent, EmpleadosListarComponent]
})
export class EmpleadosModule { }
