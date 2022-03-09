import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { productsTotalPriceSelector, productsTotalQuantitySelector } from '../../state/cart.selectors';

@Component({
  selector: 'cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  productsTotalQuantity$: Observable<number>
  productsTotalPrice$: Observable<number>

  constructor(private _store: Store) {
    this.productsTotalQuantity$ = this._store.select(productsTotalQuantitySelector)
    this.productsTotalPrice$ = this._store.select(productsTotalPriceSelector)
  }

  ngOnInit(): void {
  }

}
