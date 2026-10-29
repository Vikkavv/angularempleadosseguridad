import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/EmpleadoService';
import checkSession from '../../utils/authChecker';
import { AuthEmpleadosService } from '../../services/AuthEmpleadosService';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  private _serviceAuth: AuthEmpleadosService = inject(AuthEmpleadosService);

  constructor(private _router: Router, private _service: EmpleadoService){}

  verPassword(){
    if(this.password.nativeElement.type == "text") this.password.nativeElement.type = "password"
    else this.password.nativeElement.type = "text"
  }

  async sendLogInInfo(): Promise<void>{
    let usuarioEmpleado = new Empleado(this.username.nativeElement.value, this.password.nativeElement.value);
    this._serviceAuth.logInEmpleado(await this._service.authenticate(usuarioEmpleado));
    if(checkSession())
      this._router.navigate(['/']);
  }

}
