import { Injectable } from '@angular/core';
import { Reporter } from '../interface/reporter';

@Injectable({
  providedIn: 'root'
})
export class EngaingReporterService implements Reporter {

  constructor() { }
  report () : void {
    console.log('engaing reporting') ; 
   }
}
