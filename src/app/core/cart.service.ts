import { Injectable } from '@angular/core';
import {Products} from './models/products.model';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Products[]=[];
  private cart = new BehaviorSubject<Products[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Products){
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
