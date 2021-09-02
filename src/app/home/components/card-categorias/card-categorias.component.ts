import {Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy} from '@angular/core';
import {Categorias} from '../../../core/models/categorias.model'
@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.scss']
})
export class CardCategoriasComponent implements OnInit, OnDestroy{

  @Input()
  categorias!: Categorias;

  constructor() { 
    console.log('1. constructor');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

}
