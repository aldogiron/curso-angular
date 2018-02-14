import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados-crear',
  templateUrl: './empleados-crear.component.html',
  styleUrls: ['./empleados-crear.component.css']
})
export class EmpleadosCrearComponent implements OnInit {

  public modelo = new EmpleadoModelo('juan', false, 'M', '');

  public departamentos = [];

  constructor() { }

  ngOnInit() {
    this.departamentos = [
      'A',
      'B',
      'C',
    ];
  }

  submit() {
    //hacer algo

    console.log(this.modelo);
  }

}

class EmpleadoModelo {

  constructor(
    public nombre: string,
    public activo: boolean,
    public sexo: 'M' | 'F',
    public departamento: string
  ) {

  }

}
