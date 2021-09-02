import { Injectable } from '@angular/core';
import {Categorias} from './models/categorias.model'
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categorias[] = [
    {
      title: 'Herramientas eléctricas',
      image: 'assets/images/products/categorias/h_electricas.jpeg',
      description:'herramientas electricas de alta calidad'
    },
    {
      title: 'Herramientas manuales',
      image: 'assets/images/products/categorias/manuales.jpeg',
      description: 'sssssss'
    },
    {
      title: 'Escaleras',
      image: 'assets/images/products/categorias/escaleras.jpeg',
      description:'lllllllllll'
    },
    {
      title: 'Cerrajeria',
      image: 'assets/images/products/categorias/cerrajeria.jpeg',
      description:'mmmmmmmmmmm'
    },
    {
      title: 'Carpinteria',
      image: 'assets/images/products/categorias/carpinteria.jpeg',
      description:'nnnnnnnnnnnnnn'
    },
    {
      title: 'Construccion',
      image: 'assets/images/products/categorias/construccion.jpeg',
      description:'ggggggggggggggggg'
    }
  ]

  constructor() { }

  getAllCategorias(){
    return this.categorias
  }
}

