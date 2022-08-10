import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config.token';
import { Logger } from '../interface/logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix: string = "root" ;

  log(message:string):void{
    console.log(`${this.prefix} (experimental) : ${message}`)
  }

  constructor(@Inject(APP_CONFIG) private config : AppConfig) {
    console.log('experimental -> constructor ->config ', config);
   }
}
