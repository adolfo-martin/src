import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from '../services/products.service';
import { ProductsSelectComponent } from './components/products-select/products-select.component';
import { Product, ProductUuid } from './entities/product';
import { addProduct } from './state/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cart';

  constructor(private _store: Store, private _productsService: ProductsService) { }

  private _currentProductUuid!: ProductUuid

  manageProductsLoaded(e: any) {
    console.log('Productos cargados')
  }

  manageProductChanged(productUuid: ProductUuid) {
    this._currentProductUuid = productUuid
  }

  manageAddProductToCard(e: Event) {
    if (this._currentProductUuid) {
      this._productsService.retrieveProductByUuid$(this._currentProductUuid)
        .subscribe(product => {
          if (product) {
            this._store.dispatch(addProduct(product))
          }
        }
        )
    }
  }
}
