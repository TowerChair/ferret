import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product.component';
import {MaterialModule} from './../material/material.module'


@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[CardProductComponent]
})
export class CardProductModule { }
