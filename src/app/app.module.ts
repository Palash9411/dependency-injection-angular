import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { REPORTERS } from './reporter.token';
import { BrowserReporterService } from './service/browser-reporter.service';
import { EngaingReporterService } from './service/engaing-reporter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
      {provide : REPORTERS , useExisting : BrowserReporterService ,multi :true} ,
      {provide : REPORTERS , useExisting : EngaingReporterService , multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
