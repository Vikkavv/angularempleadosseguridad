import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import checkSession from '../../utils/authChecker';
import { Trabajador } from '../../models/Trabajador';
import { EmpleadoService } from '../../services/EmpleadoService';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent {

  public subordinados!: Trabajador[];

  constructor(private _router: Router, private _detector: ChangeDetectorRef, private _service: EmpleadoService) {}

  checkToken(): void{
    let hasSession: boolean = checkSession();
    if(!hasSession) this._router.navigate(['/login']);
  }

  async getSubordinados(): Promise<void> {
    this.subordinados = await this._service.getSubordinados();
    this._detector.detectChanges();
  }

  ngOnInit(): void {
    //this.checkToken();
    this.getSubordinados();
  }

}
