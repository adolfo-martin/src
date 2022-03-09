import { Product } from "../entities/product";
import { createAction, props } from '@ngrx/store'

export const clearCart = createAction('Clear cart')
export const addProduct = createAction('Add product', props<Product>())
export const removeProduct = createAction('Remove product', props<Product>())

