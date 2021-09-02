import { Injectable } from '@angular/core';
import {Products} from './models/products.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Products[]=[
    {
      id:'001',
      title:'Cierra Circular',
      price:1200 ,
      image:'assets/images/products/h_electricas/cierra_circular.jpeg',
      description:'Grandiosa cierra circular',
      categoria:'electricas'
    },
    {
      id:'002',
      title:'Pulidora',
      price:800 ,
      image:'assets/images/products/h_electricas/pulidora.jpeg',
      description:'Grandiosa pulidora',
      categoria:'electricas'
    },
    {
      id:'003',
      title:'Taladro',
      price:900 ,
      image:'assets/images/products/h_electricas/taladro.jpg',
      description:'Gran taladro ',
      categoria:'electricas'
    },
    {
      id:'',
      title:'',
      price:0 ,
      image:'',
      description:'',
      categoria:''
    },
    {
      id:'',
      title:'',
      price:0 ,
      image:'',
      description:'',
      categoria:''
    },
    {
      id:'',
      title:'',
      price:0 ,
      image:'',
      description:'',
      categoria:''
    },
    {
      id:'',
      title:'',
      price:0 ,
      image:'',
      description:'',
      categoria:''
    },
    
    
    
  ]

  

  constructor() { }

  getProductsCat(cat:string){
    return this.products.filter(item => cat===item.categoria )
  }
}
