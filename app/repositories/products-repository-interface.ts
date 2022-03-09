import { Observable } from "rxjs";
import { Product } from "../entities/product";

export interface ProductsRepositoryInterface {
    retrieveProducts$(): Observable<Product[]>
    retrieveProductByUuid$(uuid: string): Observable<Product | undefined>
}
