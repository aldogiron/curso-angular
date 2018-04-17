import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpleadosService, Empleado } from '../../servicios/empleados.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-crear',
  templateUrl: './empleados-crear.component.html',
  styleUrls: ['./empleados-crear.component.css']
})
export class EmpleadosCrearComponent implements OnInit {

  public nombre = '';
  public id: number;

  constructor(
    private servicio: EmpleadosService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
      this.cargarEmpleado();
    });
  }

  submit() {
    const modelo = {
      nombre: this.nombre
    };

    this.servicio.crear(modelo)
      .subscribe(e => {
        this.nombre = '';
        this.router.navigate(['empleados', 'listar'], {
          queryParams: {
            lastId: this.id
          }
        });
      });
  }

  private cargarEmpleado() {
    this.servicio.obtenerUnico(this.id).subscribe(x => {
      this.nombre = x.nombre;
    });
  }

}
