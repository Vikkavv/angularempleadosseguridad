import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Trabajador } from '../../models/Trabajador';
import { EmpleadoService } from '../../services/EmpleadoService';
import checkSession from '../../utils/authChecker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {

  public trabajador!: Trabajador;

  constructor(private _detector: ChangeDetectorRef, private _service: EmpleadoService, private _router: Router) {}

  checkToken(): void{
    let hasSession: boolean = checkSession();
    if(!hasSession) this._router.navigate(['/login']);
  }

  async getUserTrabajador(): Promise<void>{
    this.trabajador = await this._service.getEmpleadoUser();
    this._detector.detectChanges();
  }

  ngOnInit(): void {
    //this.checkToken();
    this.getUserTrabajador();
  }

}
