import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {

  @ViewChild('searched') searched: ElementRef;

  constructor(private _router: Router) {
    this.searched = new ElementRef("");
  }

  redirectToSearch(){
    this._router.navigate(["/search", this.searched.nativeElement.value]);
  }

}
