import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardCategoriasComponent } from './components/card-categorias/card-categorias.component';
import {MaterialModule} from '../material/material.module'
@NgModule({
  declarations: [
    HomeComponent,
    CardCategoriasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
