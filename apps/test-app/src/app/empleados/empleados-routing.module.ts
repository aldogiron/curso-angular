import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpleadosListarComponent } from './empleados-listar/empleados-listar.component';
import { EmpleadosCrearComponent } from './empleados-crear/empleados-crear.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'empleados',
                children: [
                    { path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: EmpleadosListarComponent },
                    { path: 'nuevo', component: EmpleadosCrearComponent },
                    { path: ':id/editar', component: EmpleadosCrearComponent },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class EmpleadosRoutingModule {

}
