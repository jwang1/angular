import {Component} from 'angular2/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            productId: 2,
            productName: "product 2",
            productCode: 'product2',
            releaseDate: 'March 18, 2016',
            price: 32.99,
            description: 'product-2',
            starRating: 4.2,
            imageUrl: "http://localhost:3000/assets/images/logo.jpg"
        },
        {
            productId: 5,
            productName: "product 5",
            productCode: 'product5',
            releaseDate: 'June 18, 2016',
            price: 11.99,
            description: 'product-2',
            starRating: 3.24,
            imageUrl: "http://localhost:3000/assets/images/logo.jpg"
        }

    ];
}