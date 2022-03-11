import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductItemI } from "../models/product-item-i";

export const productsTotalQuantitySelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: ProductItemI[]) => cart.length
)

export const productsTotalPriceSelector = createSelector(
    createFeatureSelector('cartItems'),
    (cart: ProductItemI[]) => cart.reduce(
        (acc: number, cur: ProductItemI) => { console.log(cart); console.log(cur); acc += cur.price; return acc },
        0
    )
)