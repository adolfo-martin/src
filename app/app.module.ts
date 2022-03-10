import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { cartReducer } from './state/cart.reducers';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { ProductsSelectComponent } from './components/products-select/products-select.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsSelectComponent,
    CartHeaderComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cartEntries: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
