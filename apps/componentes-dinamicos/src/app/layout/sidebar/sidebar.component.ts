import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  public items = [
    { title: 'Dashboard', icon: 'home', link: 'dashboard' },
    { title: 'Empleados', icon: 'address-card-o', link: 'empleados' },
  ];

}
