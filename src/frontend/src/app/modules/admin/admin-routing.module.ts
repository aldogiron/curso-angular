import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuracion',
    pathMatch: 'full',
    data: { title: 'Administración' },
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Configuración',
      roles: [ 'admin' ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
