import { createReducer, on } from "@ngrx/store";
import { Product } from "../../entities/product";
import { CartAction, CartActionsTypes } from "../actions/cart.actions";
import { ProductItemI } from "../models/product-item-i";

const initialCartItems: ProductItemI[] = [
    { uuid: '0000-0002', name: 'Teclado Logitech', price: 24.95 },
]

export function CartReducer(
    state: ProductItemI[] = initialCartItems,
    action: CartAction
): ProductItemI[] {
    switch (action.type) {
        case CartActionsTypes.ADD_PRODUCT:
            console.log('[CartReducer]')
            return [...state, action.payload]
        default:
            return state;
    }
}



// const _clearCart = (_: any) => []

// const _addProduct = (items: Product[], product: Product) => {
//     const itemsClone: Product[] = JSON.parse(JSON.stringify(items))
//     console.log(product)
//     itemsClone.push(product)
//     return itemsClone
// }

// const _removeProduct = (items: Product[], product: Product) => {
//     const itemsClone: Product[] = JSON.parse(JSON.stringify(items))
//     const foundEntriy = itemsClone.find(entriy => entriy.uuid === product.uuid)
//     if (foundEntriy) {
//         itemsClone.splice(itemsClone.indexOf(foundEntriy), 1)
//     }
//     return itemsClone
// }

// export const cartReducer = createReducer(
//     initialCartItems,
//     on(clearCart, _clearCart),
//     on(addProduct, _addProduct),
//     on(removeProduct, _removeProduct),
// )