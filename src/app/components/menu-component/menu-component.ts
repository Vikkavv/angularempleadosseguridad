import { Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignalService } from '../../services/signalService';
import { AuthEmpleadosService } from '../../services/AuthEmpleadosService';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  @ViewChild('searched') searched: ElementRef;

  public _signalService: SignalService = inject(SignalService);
  private _authService: AuthEmpleadosService = inject(AuthEmpleadosService);

  public usuario = this._authService.user;
  public contador = this._signalService.contador

  constructor(private _router: Router) {
    this.searched = new ElementRef("");
  }

  redirectToSearch(){
    this._router.navigate(["/search", this.searched.nativeElement.value]);
  }

}
