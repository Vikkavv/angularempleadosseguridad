import { Router } from "@angular/router";
import { EmpleadoService } from "../services/EmpleadoService";
import { Inject } from "@angular/core";


export default function checkSession(): boolean{
    if(EmpleadoService.token == "" || !EmpleadoService.token || EmpleadoService.token === undefined){
        return false
    }
    return true
}


        
