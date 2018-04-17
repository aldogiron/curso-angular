import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-form-layout',
    templateUrl: './form-layout.component.html'
})
export class FormLayoutComponent {

    public mostrar: boolean;
    @Input()
    public showToolbar: boolean;

    @Input()
    public buttonText = 'Aceptar';

    @Output()
    public settingsClick = new EventEmitter<any>();

    @Output()
    public okClick = new EventEmitter<any>();
}
