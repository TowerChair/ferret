import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../../core/categorias.service'
import {Categorias} from '../../../core/models/categorias.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cat=this.categoriasService.getAllCategorias();
  

  constructor(
    private categoriasService:CategoriasService,
  ) { }

  ngOnInit(): void {
  }

  

}
