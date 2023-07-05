export class Product {

    name: string;

    description: string;

    price: number;

    image: string;

    constructor(data: Partial<Product>= {}){
        Object.assign(this, data);
    }

}