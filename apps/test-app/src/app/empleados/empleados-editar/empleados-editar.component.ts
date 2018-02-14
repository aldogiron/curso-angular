import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-empleados-editar',
  templateUrl: './empleados-editar.component.html',
  styleUrls: ['./empleados-editar.component.css']
})
export class EmpleadosEditarComponent implements OnInit {

  public form: FormGroup;
  public departamentos: string[];

  constructor(private fb: FormBuilder) {
    this.form = this.CreateForm();
    this.departamentos =  [];
  }

  /*private CreateForm(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [
        Validators.required, Validators.minLength(3)
      ]),
      sexo: new FormControl('M')
    });
  }*/

  private CreateForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(3) ]],
      sexo: ['M']
    });
  }

  ngOnInit() {
    this.departamentos = this.obtenerDepartamentos();
    this.form.controls.nombre.setValue('juan');
  }

  private obtenerDepartamentos(): string[] {
    return [
      'A',
      'B',
      'C',
    ];
  }

  submit() {
    //hacer algo

    console.log(this.form.value);
  }

}
