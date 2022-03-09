import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../entities/product';
import { ProductsRepositoryInterface } from './products-repository-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsArrayRepositoryMock implements ProductsRepositoryInterface {
    static products: Product[] = [
        new Product('0000-0001', 'Ratón Logitech', 19.90),
        new Product('0000-0002', 'Teclado Logitech', 24.95),
        new Product('0000-0003', 'Monitor LG 4K IPS', 349.90),
    ]

    retrieveProducts$(): Observable<Product[]> {
        return of(ProductsArrayRepositoryMock.products).pipe(
            delay(1500)
        )
    }
    retrieveProductByUuid$(uuid: string): Observable<Product | undefined> {
        return of(ProductsArrayRepositoryMock.products
            .find(product => product.uuid === uuid)
        ).pipe(
            delay(1500)
        )
    }
}
