import { Component } from '@angular/core';
import { Router } from '@angular/router';
import checkSession from '../../utils/authChecker';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent {

  constructor(private _router: Router) {}

  checkToken(): void{
    let hasSession: boolean = checkSession();
    if(!hasSession) this._router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.checkToken();
  }

}
