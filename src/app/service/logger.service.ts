import { Inject,Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config.token';
import { Logger } from '../interface/logger';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Injectable({
  providedIn: 'root' ,
  useClass : ExperimentalLoggerService
})
export class LoggerService implements Logger{

  constructor() {
 
   }
  prefix: string = "root" ;

  log(message:string):void{
    console.log(`${this.prefix} : ${message}`)
  }
}
