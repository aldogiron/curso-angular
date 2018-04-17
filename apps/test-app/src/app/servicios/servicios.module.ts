import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from './empleados.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [EmpleadosService],
})
export class ServiciosModule { }
