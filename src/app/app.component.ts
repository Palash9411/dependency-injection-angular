import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { LegacyLogger } from './logger.legacy';
import { ExperimentalLoggerService } from './service/experimental-logger.service';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers : [{
    // provide : LoggerService ,useClass : ExperimentalLoggerService
    // return new ExperimentalLoggerService 
    // provide : LoggerService ,useExisting : ExperimentalLoggerService
    provide : LoggerService ,useClass : ExperimentalLoggerService  
    
  }]
    // {
    //   provide : LoggerService ,
    //   useValue : LegacyLogger ,
    //   multi : true 
    // }]
})
export class AppComponent implements OnInit {
  title = 'dependency-injection-indepth';
  constructor(private logger : LoggerService ,
              private experimentalLogger : ExperimentalLoggerService) { } ; 

  ngOnInit(): void {
  //  console.log(this.logger)

    // this.logger.prefix = 'App component' ; 
    this.logger.log('App init')
    

    console.log('is the instace same' , this.logger === this.experimentalLogger) ; 
  }
}
