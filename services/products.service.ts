import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/entities/product';
import { ProductsArrayRepositoryMock } from '../app/repositories/products-array-repository-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _productsRepository: ProductsArrayRepositoryMock) { }

  public retrieveProducts(): Observable<Product[]> {
    return this._productsRepository.retrieveProducts$()
  }
}
