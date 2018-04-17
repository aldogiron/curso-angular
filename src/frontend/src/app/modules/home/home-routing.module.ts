import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'crear',
        component: CrearComponent,
        data: {
          title: 'Crear'
        }
      },
      {
        path: 'editar',
        component: EditarComponent,
        data: {
          title: 'Editar'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
