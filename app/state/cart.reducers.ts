import { createReducer, on } from "@ngrx/store";
import { Product } from "../entities/product";
import { addProduct, clearCart, removeProduct } from "./cart.actions";

export const initialCartEntries: Product[] = []

const _clearCart = (_: any) => []

const _addProduct = (entries: Product[], product: Product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries))
    console.log(product)
    entriesClone.push(product)
    return entriesClone
}

const _removeProduct = (entries: Product[], product: Product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries))
    const foundEntriy = entriesClone.find(entriy => entriy.uuid === product.uuid)
    if (foundEntriy) {
        entriesClone.splice(entriesClone.indexOf(foundEntriy), 1)
    }
    return entriesClone
}

export const cartReducer = createReducer(
    initialCartEntries,
    on(clearCart, _clearCart),
    on(addProduct, _addProduct),
    on(removeProduct, _removeProduct),
)