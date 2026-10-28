import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/EmpleadoService';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(private _router: Router, private _service: EmpleadoService){}

  async sendLogInInfo(): Promise<void>{
    let usuarioEmpleado = new Empleado(this.username.nativeElement.value, this.password.nativeElement.value);
    EmpleadoService.token = await this._service.authenticate(usuarioEmpleado);
    if()
  }

}
