import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Routes}  from '@angular/router';
import { ToolsComponent } from '../tools/tools/tools.component';
import { SplinkerComponent } from '../splinker/splinker/splinker.component';


const rt :Routes=[

   {path:'tools',component:ToolsComponent},
   {path:'splinker',component:SplinkerComponent}
    
];
@NgModule({
    imports:[RouterModule.forRoot(rt)],
    exports:[RouterModule]
    
    
    
    
    })
    
    export class RoutingModule{

        
    }