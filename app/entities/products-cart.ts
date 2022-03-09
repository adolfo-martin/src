import { Product } from "./product"


class CartItem {
    constructor(
        public readonly product: Product,
        public quantity: number,
    ) {}
}

export class ProductsCart {

    items: CartItem[]

    public addProduct(product: Product) {
        const item = this.items.find(item => item.product.uuid === product.uuid)
        if (item) {
            item.quantity = item.quantity + 1
        } else {
            this.items.push(new CartItem(product, 1)) 
        }
    }
}
