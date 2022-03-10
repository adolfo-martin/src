import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReducerManager, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { ProductsSelectComponent } from './components/products-select/products-select.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CartReducer } from './store/reducers/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ProductsSelectComponent,
    CartHeaderComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    //@ts-ignore
    StoreModule.forRoot({ cart: CartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
