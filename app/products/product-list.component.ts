import {Component} from 'angular2/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2; 
    showImage: boolean = false;
    
    products: any[] = [
        {
            productId: 2,
            productName: "Annie",
            productCode: 'product2',
            releaseDate: 'March 18, 2016',
            price: 32.99,
            description: 'product-2',
            starRating: 4.2,
            imageUrl: 'https://openclipart.org/download/261937/keyMetal.svg'
        },
        {
            productId: 5,
            productName: "Raymond",
            productCode: 'product5',
            releaseDate: 'June 18, 2016',
            price: 11.99,
            description: 'product-2',
            starRating: 3.24,
            imageUrl: 'https://openclipart.org/download/261301/WoodLock-remix.svg'
        }

    ];
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}