import { Component, OnInit } from '@angular/core';
import checkSession from '../../utils/authChecker.js'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) {}

  checkToken(): void{
    let hasSession: boolean = checkSession();
    if(!hasSession) this._router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.checkToken();
  }

}
