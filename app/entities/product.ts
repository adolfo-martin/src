export class Product {
    constructor(
        public readonly uuid: string, 
        public readonly name: string, 
        public readonly price: number,
    ) {}
}
