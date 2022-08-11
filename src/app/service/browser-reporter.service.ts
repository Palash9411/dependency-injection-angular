import { Injectable } from '@angular/core';
import { Reporter } from '../interface/reporter';

@Injectable({
  providedIn: 'root'
})
export class BrowserReporterService implements Reporter{

  constructor() { }

  report () : void {
   console.log('browser reporting') ; 
  }
}
