import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit  {
    errorMessage: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = "Product List";
    showImage: boolean = false;
    listFilter: string = "";                // this is used with the filter by textbox and custom pipe for filtering
    products: IProduct[];

    constructor(private _productService: ProductService) {
    }

    toggleImages(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('in ngOnInit()');
        this._productService.getProducts()
            .subscribe(retArr => this.products = retArr, error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }

}
