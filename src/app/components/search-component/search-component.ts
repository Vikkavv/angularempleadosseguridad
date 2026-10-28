import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { routes } from '../../app-routing-module';

@Component({
  selector: 'app-search-component',
  standalone: false,
  styleUrl: './search-component.css',
  templateUrl: './search-component.html',
})
export class SearchComponent implements OnInit{

  public searched!: string;
  public results!: Result[]

  constructor(private _activatedRoute: ActivatedRoute, private _detector: ChangeDetectorRef) {}

  createSearch(){
    let resultsLocal: Result[] = [];
    for (const route of routes) {
      let inComponentName = (route.component?.name)?.toLocaleLowerCase().includes(this.searched);
      if((route.path?.includes(this.searched) || inComponentName ) && !(route.path?.includes(":"))) 
        resultsLocal.push(new Result(normalizeCamelCase(route.component?.name ?? ""), (route.path ?? "") === '' ? '/' : route.path ?? ""));
    }
    this.results = resultsLocal;
  }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe((params: Params) => {
        this.searched = params['searched'];
        this.createSearch();
            this._detector.detectChanges();
      })   
  }
}

export function normalizeCamelCase(camelCaseStr: string): string {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let normalized = "";
  let lowerCased = camelCaseStr.toLocaleLowerCase();
  let lastWordIndex = 0;
  for (let i = 0; i < camelCaseStr.length; i++) {
    let char = camelCaseStr.charAt(i);
    if(letters.includes(char)){
      normalized += lowerCased.slice(lastWordIndex, i) + " ";
      lastWordIndex = i;
    } 
  }
  normalized += lowerCased.slice(lastWordIndex, camelCaseStr.length);
  normalized = normalized.replace("_ ", "").replace("component","");
  console.log(normalized, camelCaseStr);
  return capitalize(normalized);
}

export function capitalize(text:string): string {
  let char = text.charAt(0).toLocaleUpperCase();
  let result = char + text.slice(1, text.length);
  return result;
}

class Result{
  constructor(
    public name: string,
    public path: string
  ) {}
}
