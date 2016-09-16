import {Component} from 'angular2/core'; 

@Component({
    selector: 'main-app',
    template: `
    <div><h2>{{pageTitle}}</h2>
        <div>First component</div>
    <div>
    `
})
export class AppComponent {

    pageTitle: string = 'Product Management.';

}