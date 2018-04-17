import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpleadosService {

  private apiUrl = 'http://localhost:3000/api/empleados';
  public empleadoCreado = new EventEmitter<Empleado>();

  constructor(private http: HttpClient) { }

  public obtenerTodos() {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  public obtenerUnico(id: number) {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  public crear(modelo: { nombre: string }) {
    return this.http.post<Empleado>(this.apiUrl, modelo)
      .do((e) => this.empleadoCreado.emit(e));
  }

}

export interface Empleado {
  id: number;
  nombre: string;
}
