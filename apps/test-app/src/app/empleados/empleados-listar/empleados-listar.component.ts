import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmpleadosService, Empleado } from '../../servicios/empleados.service';

@Component({
  selector: 'app-empleados-listar',
  templateUrl: './empleados-listar.component.html',
  styleUrls: ['./empleados-listar.component.css']
})
export class EmpleadosListarComponent implements OnInit {

  public empleados: Observable<Empleado[]>;

  constructor(private servicio: EmpleadosService) {
    servicio.empleadoCreado.subscribe(() => this.actualizar());
  }

  ngOnInit() {
    this.obtenerEmpleados();
  }

  public actualizar() {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleados = this.servicio.obtenerTodos();
  }
}
