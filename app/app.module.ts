import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { cartReducer } from './state/cart.reducers';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    CartHeaderComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cartEntries: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
