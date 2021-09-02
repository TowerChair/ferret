import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasElectricasRoutingModule } from './herramientas-electricas-routing.module';
import { HerramientasElectricasComponent } from './components/herramientas-electricas/herramientas-electricas.component';
import {CardProductModule} from '../card-product/card-product.module'

@NgModule({
  declarations: [
    HerramientasElectricasComponent
  ],
  imports: [
    CommonModule,
    HerramientasElectricasRoutingModule,
    CardProductModule
    
  ]
})
export class HerramientasElectricasModule { }
