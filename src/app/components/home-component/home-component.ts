import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import checkSession from '../../utils/authChecker.js'
import { Route, Router } from '@angular/router';
import { EmpleadoService } from '../../services/EmpleadoService.js';
import { Trabajador } from '../../models/Trabajador.js';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {

  public empleados!: Trabajador[];

  constructor(private _router: Router, private _service: EmpleadoService, private _detector: ChangeDetectorRef) {}

  public token!: string;

  checkToken(): void{
    let hasSession: boolean = checkSession();
    if(!hasSession) this._router.navigate(['/login']);
  }

  async getEmpleados(): Promise<void> {
    this.empleados = await this._service.getAllEmpleados();
    this._detector.detectChanges();
  }

  closeSession(){
    EmpleadoService.closeSession();
    this.checkToken();
  }

  ngOnInit(): void {
    //this.checkToken();
    this.token = sessionStorage.getItem("token") ?? "no token";
    this.getEmpleados();
  }

}
