import { computed, Injectable, signal } from "@angular/core";

@Injectable({providedIn: "root"})
export class SignalService{
  public contador = signal(10);
  public doble = computed(() => {
    return this.contador() * 2;
  });

  resetearContador(): void {
    this.contador.set(0);
  }

  incrementarContador(): void{
    this.contador.update(value => value + 1);
  }
}
