import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule,DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap';
@NgModule({
    
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot(),
      ButtonsModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot()
    ],
    exports: [BrowserModule,
        BrowserAnimationsModule,
       BsDatepickerModule,
       DatepickerModule,
       ButtonsModule,
       PaginationModule,
       TabsModule
    ]
       
  })
  export class NGXBootstrapModule { }