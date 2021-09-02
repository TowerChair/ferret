import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HerramientasElectricasComponent } from './components/herramientas-electricas/herramientas-electricas.component'

const routes: Routes = [
  {
    path:'',
    component:HerramientasElectricasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasElectricasRoutingModule { }
