import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { Product } from './entities/product';
import { addProduct } from './state/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cart';

  // @ViewChild('tabProducts') private _nodeProductsTable!: ElementRef;

  constructor(private _store: Store) { }

  private _currentProduct!: Product

  manageProductsLoaded(e: any) {
    console.log('Productos cargados')
  }

  manageProductChanged(e: Product) {
    const product = e;
    console.log(product)
    this._currentProduct = product
  }

  manageAddProductToCard(e: Event) {
    if (this._currentProduct) {
      console.log(this._currentProduct.name)
      this._store.dispatch(addProduct(this._currentProduct))
    }
    // console.log(this._nodeProductsTable)
    // const productUuid = ((this._nodeProductsTable as unknown) as ProductsTableComponent).value
    // console.log(`Product added to card: ${productUuid}`)
  }
}
