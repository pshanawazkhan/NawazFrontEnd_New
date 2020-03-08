import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './sharedModules/material.module';
import { NGXBootstrapModule } from './sharedModules/ngxbootstrap.module';
import { RoutingModule } from './sharedModules/routing.module';
import { SplinkerComponent } from './splinker/splinker/splinker.component';
import { ToolsComponent } from './tools/tools/tools.component';
import { CyclesComponent } from './cycles/cycles/cycles.component';
import { SplinkerServicesService } from './services/splinker-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SplinkerComponent,
    ToolsComponent,
    CyclesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    NGXBootstrapModule,
    RoutingModule,
    HttpClientModule,
    
  ],
  providers: [SplinkerServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
