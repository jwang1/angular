import {Injectable} from "angular2/core";
import {IProduct} from "./product";

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                productId: 2,
                productName: "Key",
                productCode: 'product2',
                releaseDate: 'March 18, 2016',
                price: 32.99,
                description: 'Turn Key.',
                starRating: 4.2,
                imageUrl: 'https://openclipart.org/download/261937/keyMetal.svg'
            },
            {
                productId: 4,
                productName: "Box",
                productCode: 'box-sku325',
                releaseDate: 'June 18, 2011',
                price: 11.59,
                description: 'Jerrell Box',
                starRating: 3.8,
                imageUrl: 'https://openclipart.org/download/171044/giftbox2.svg'
            },
            {
                productId: 5,
                productName: "Lock",
                productCode: 'product5',
                releaseDate: 'June 18, 2016',
                price: 11.59,
                description: 'Lock for sale.',
                starRating: 3.4,
                imageUrl: 'https://openclipart.org/download/261301/WoodLock-remix.svg'
            }
        ];
    }
}    