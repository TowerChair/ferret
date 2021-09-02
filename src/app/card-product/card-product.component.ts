import {  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy } from '@angular/core';
import {Products  } from '../core/models/products.model'
import {CartService} from '../core/cart.service'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit,OnDestroy {
  @Input() product!: Products;
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart(){
    console.log("añadir al carrito");
    this.cartService.addCart(this.product);
  }

}
