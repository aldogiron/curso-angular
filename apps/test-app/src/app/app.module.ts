import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmpleadosModule } from './empleados/empleados.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmpleadosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
