import { Router } from "@angular/router";
import { EmpleadoService } from "../services/EmpleadoService";
import { Inject } from "@angular/core";


export default function checkSession(): boolean{
  let token = sessionStorage.getItem("token");
    if(token == "" || !token || token === undefined){
        return false
    }
    return true
}



