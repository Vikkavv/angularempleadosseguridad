import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/Empleado";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Trabajador } from "../models/Trabajador";

@Injectable()
export class EmpleadoService{


    constructor(private _http: HttpClient){}

    static closeSession(){
      sessionStorage.clear();
    }

    async authenticate(userEmpleado: Empleado): Promise<string> {
        let header = new HttpHeaders().set("content-type", "application/json");
        let object = await firstValueFrom(this._http.post<TokenObj>(environment.apiEmpleadosUrl + "/auth/login", userEmpleado, {headers: header}))
        return object.response;
    }

    async getEmpleadoUser(): Promise<Trabajador> {
      let token: string = sessionStorage.getItem("token") ?? '';
      let header = new HttpHeaders().set("authorization", "Bearer " + token);
      return await firstValueFrom(this._http.get<Trabajador>(environment.apiEmpleadosUrl + "/api/empleados/perfilempleado", {headers: header}));
    }

    async getAllEmpleados(): Promise<Trabajador[]> {
      let token: string = sessionStorage.getItem("token") ?? '';
      let header = new HttpHeaders().set("authorization", "Bearer " + token);
      let trabajadores: Trabajador[] = [];
      try{
        trabajadores = await firstValueFrom(this._http.get<Trabajador[]>(environment.apiEmpleadosUrl + "/api/empleados", {headers: header}));
      }
      catch(e: any){
        if(e.status == 401) sessionStorage.removeItem("token");
      }
      return trabajadores
    }

    async getSubordinados(): Promise<Trabajador[]> {
      let token: string = sessionStorage.getItem("token") ?? "";
      let header = new HttpHeaders().set("authorization", "Bearer " + token);
      let trabajadores: Trabajador[] = [];
      try{
        trabajadores = await firstValueFrom(this._http.get<Trabajador[]>(environment.apiEmpleadosUrl + "/api/empleados/subordinados", {headers: header}));
      }
      catch(e: any){
        if(e?.status == 401) sessionStorage.removeItem("token");
      }
      return trabajadores
    }

}
class TokenObj{
  constructor(
    public response: string
  ) {}
}
