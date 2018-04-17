import { Component } from '@angular/core';

@Component({
    templateUrl: './editar.component.html'
})
export class EditarComponent {

    onSettingsClick() {
        console.log('settings clicked');
    }

    editar() {
        console.log('editar');
    }

}
