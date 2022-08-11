import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config.token';
import { Logger } from '../interface/logger';
import { Reporter } from '../interface/reporter';
import { REPORTERS } from '../reporter.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix: string = "root" ;

  

  constructor(@Inject(REPORTERS) private reporter: ReadonlyArray<Reporter>) {
    // console.log('experimental -> constructor ->config ', config);
   }


   log(message:string):void{
    this.reporter.forEach(element => {
      element.report() ;
    });
    console.log(`${this.prefix} (experimental) : ${message}`)
  }
}
