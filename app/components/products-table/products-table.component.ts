import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../entities/product';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products$!: Observable<Product[]>

  // @Input('value') public value: string = '';

  @Output('productsLoaded') private _productsLoadedEmitter = new EventEmitter()

  @Output('productChanged') private _productChangedEmitter = new EventEmitter<Product>()

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.retrieveProducts().pipe(
      finalize(() => this.emitProductsLoaded())
    )
  }

  manageProductChanged(e: Event) {
    // @ts-ignore
    const product: Product = e.currentTarget.value
    console.log('-------------------', product)
    // this.value = product;
    // this._productChangedEmitter.emit(product)
    this._productChangedEmitter.emit(new Product('0000-5555', 'Patatas', 100.95))
  }

  emitProductsLoaded() {
    this._productsLoadedEmitter.emit()
  }
}
