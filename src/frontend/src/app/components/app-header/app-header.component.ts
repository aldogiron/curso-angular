import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  public usuario: string;

  ngOnInit(): void {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario).nombre;
    }
  }


}
