import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuracion',
    pathMatch: 'full'
  },
  {
    path: '',
    data: { title: 'Administración' },
    children: [
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
        data: {
          title: 'Configuración'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
