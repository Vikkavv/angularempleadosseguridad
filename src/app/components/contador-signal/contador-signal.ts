import { Component, computed, inject, signal } from '@angular/core';
import { SignalService } from '../../services/signalService';

@Component({
  selector: 'app-contador-signal',
  standalone: false,
  styleUrl: './contador-signal.css',
  templateUrl: './contador-signal.html',
})
export class ContadorSignal {

  private _signalService: SignalService = inject(SignalService);

  public contador = this._signalService.contador;
  public doble = this._signalService.doble;

  resetearContador(): void {
    this._signalService.resetearContador();
  }

  incrementarContador(): void{
    this._signalService.incrementarContador();
  }

}
