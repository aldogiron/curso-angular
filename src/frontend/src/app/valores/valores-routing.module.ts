import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValoresListadoComponent } from './valores-listado/valores-listado.component';

const routes: Routes = [
  { path: 'valores/listado', component: ValoresListadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoresRoutingModule { }
