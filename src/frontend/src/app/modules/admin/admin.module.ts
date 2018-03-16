import { NgModule } from '@angular/core';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
  ],
  declarations: [
    ConfiguracionComponent,
  ]
})
export class AdminModule {

}
