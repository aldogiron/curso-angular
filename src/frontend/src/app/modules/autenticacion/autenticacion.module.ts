import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent]
})
export class AutenticacionModule { }
