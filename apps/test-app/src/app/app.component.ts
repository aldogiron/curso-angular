import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Empleado } from './servicios/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  ngOnInit() {
  }
}
