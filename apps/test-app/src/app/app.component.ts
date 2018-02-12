import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private lastId = 0;

  @ViewChild('firstInput')
  firstInput: ElementRef;

  title = 'angular';
  nombre = '';
  items = [];

  ngOnInit() {
    this.focusFirstInput();
  }

  submit() {

    if (!this.nombre || !this.nombre.length) {
      return;
    }

    this.lastId++;
    const item = {
      id: this.lastId,
      nombre: this.nombre
    };

    this.items.push(item);
    this.nombre = '';
    this.focusFirstInput();
  }

  private focusFirstInput() {
    const input = this.firstInput.nativeElement as HTMLInputElement;
    input.focus();
  }
}
