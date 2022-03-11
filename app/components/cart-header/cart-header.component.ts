import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { productsTotalPriceSelector, productsTotalQuantitySelector } from '../../state/cart.selectors';
import { CartStateI } from '../../store/models/cart-state-i';
import { productsTotalQuantitySelector, productsTotalPriceSelector } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  productsTotalQuantity$!: Observable<number>
  productsTotalPrice$!: Observable<number>

  constructor(private _store: Store<CartStateI>) { }

  ngOnInit(): void {
    this.productsTotalQuantity$ = this._store.select(productsTotalQuantitySelector)
    this.productsTotalPrice$ = this._store.select(productsTotalPriceSelector)
  }

}
