import {Http, Response} from 'angular2/http';
import {Observable} from'rxjs/Observable';

import {Injectable} from "angular2/core";
import {IProduct} from "./product";

@Injectable()
export class ProductService {
    //private _productUrl = 'www.myWebService.com/api/products';
    private _productUrl = 'app/api/products/products.json'; // works (but why need prefix app)
    //private _productUrl = 'api/products/products.json';   // not working
    //private _productUrl = '/api/products/products.json';
    
    constructor (private _http: Http) {
    }        
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                   .map((response: Response) => <IProduct[]>response.json())
                   .do(data => console.log('All: ' + JSON.stringify(data)))
                   .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }        
    
    
    getProducts_OLD(): IProduct[] {
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