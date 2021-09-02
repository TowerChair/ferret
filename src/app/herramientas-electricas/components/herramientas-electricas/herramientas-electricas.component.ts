import { Component, OnInit } from '@angular/core';
import {ProductsService} from './../../../core/products.service';

@Component({
  selector: 'app-herramientas-electricas',
  templateUrl: './herramientas-electricas.component.html',
  styleUrls: ['./herramientas-electricas.component.scss']
})
export class HerramientasElectricasComponent implements OnInit {
  products=this.productService.getProductsCat("electricas")
  constructor(
    private productService:ProductsService,
  ) { }

  ngOnInit(): void {
  }

}
