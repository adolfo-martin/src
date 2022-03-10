import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../entities/product";

export const productsTotalQuantitySelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: Product[]) => cart.length
)

export const productsTotalPriceSelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: Product[]) => cart.reduce(
        (acc: number, cur: Product) => { console.log(cart); console.log(cur); acc += cur.price; return acc },
        0
    )
)