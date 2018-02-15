import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';

const routes: Routes = [
  {
    path: 'empleados',
    children: [
      { path: '', redirectTo: 'crear', pathMatch: 'full' },
      { path: 'crear', component: EmpleadosCrearComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
