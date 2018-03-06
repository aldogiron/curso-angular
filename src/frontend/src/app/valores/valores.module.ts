import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoresRoutingModule } from './valores-routing.module';
import { ValoresListadoComponent } from './valores-listado/valores-listado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ValoresRoutingModule,
    HttpClientModule
  ],
  declarations: [ValoresListadoComponent]
})
export class ValoresModule { }
