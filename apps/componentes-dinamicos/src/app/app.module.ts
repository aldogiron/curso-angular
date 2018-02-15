import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmpleadosModule } from './empleados/empleados.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmpleadosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
