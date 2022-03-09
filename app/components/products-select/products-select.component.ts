import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Product, ProductUuid } from '../../entities/product';

@Component({
  selector: 'products-select',
  templateUrl: './products-select.component.html',
  styleUrls: ['./products-select.component.css']
})
export class ProductsSelectComponent implements OnInit {

  products$!: Observable<Product[]>

  @Output('productsLoaded') private _productsLoadedEmitter = new EventEmitter()

  @Output('productChanged') private _productChangedEmitter = new EventEmitter<ProductUuid>()

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.retrieveProducts$().pipe(
      finalize(() => this.emitProductsLoaded())
    )
  }

  manageProductChanged(e: Event) {
    //@ts-ignore
    const productUuid: ProductUuid = e.currentTarget.value
    this._productChangedEmitter.emit(productUuid)
  }

  emitProductsLoaded() {
    this._productsLoadedEmitter.emit()
  }
}
