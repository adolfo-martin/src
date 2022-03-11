import { ProductItemI } from "./product-item-i";

export interface CartStateI {
    readonly productsTotalQuantity$: number
    readonly productsTotalPrice$: number
}
