import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/Empleado";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class EmpleadoService{
    public static token: string;

    constructor(private _http: HttpClient){}

    async authenticate(userEmpleado: Empleado): Promise<string> {
        let header = new HttpHeaders().set("content-type", "application/json");
        return await firstValueFrom(this._http.post<string>(environment.apiEmpleadosUrl + "/auth/login", userEmpleado, {headers: header}));
    }

}