import { Action, createAction, props } from '@ngrx/store'
import { ProductItemI } from '../models/product-item-i'

export enum CartActionsTypes {
    CLEAR_CART = '[CART] Clear cart',
    ADD_PRODUCT = '[CART] Add product',
    ADD_PRODUCT_SUCCESS = '[CART] Add product success',
    ADD_PRODUCT_FAILURE = '[CART] Add product failure',
    REMOVE_PRODUCT = '[CART] Remove product',
}

export class ClearCartAction implements Action {
    readonly type = CartActionsTypes.CLEAR_CART
    constructor() { }
}

export class AddProductAction implements Action {
    readonly type = CartActionsTypes.ADD_PRODUCT
    constructor(public readonly payload: ProductItemI) { }
}

// export class RemoveProductAction implements Action {
//     readonly type = CartActionsTypes.REMOVE_PRODUCT
//     constructor(public readonly payload: ProductItem) { }
// }

export type CartAction = AddProductAction // | ClearCartAction | RemoveProductAction

// export const clearCart = createAction('Clear cart')
// export const addProduct = createAction('Add product', props<ProductItem>())
// export const removeProduct = createAction('Remove product', props<ProductItem>())

