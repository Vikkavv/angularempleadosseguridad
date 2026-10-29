import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/Empleado";
import { EmpleadoService } from "./EmpleadoService";
import { Trabajador } from "../models/Trabajador";

@Injectable()
export class AuthEmpleadosService{

  public user = signal<Trabajador | null >(null);

  constructor(private _service: EmpleadoService) {}

  async logInEmpleado(token: string): Promise<void> {
    sessionStorage.setItem("token", token);
    let empleado = await this._service.getEmpleadoUser();
    this.user.set(empleado);
  }

  closeSession(): void{
    sessionStorage.removeItem("token");
    this.user.set(null);
  }

}
