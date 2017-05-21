<<<<<<< HEAD
import { PipeTransform, Pipe } from "@angular/core";

import { IProduct } from "./product";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        if(!filterBy || !value || !value.length) {
            return value;
        }
        filterBy = filterBy.toLocaleLowerCase();

        // if the string contains the chars in filterBy it will be returned
        return value.filter(product => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
=======
import { PipeTransform, Pipe } from "@angular/core";

import { IProduct } from "./product";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        if(!filterBy || !value || !value.length) {
            return value;
        }
        filterBy = filterBy.toLocaleLowerCase();

        // if the string contains the chars in filterBy it will be returned
        return value.filter(product => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
>>>>>>> b8b6101e9c3aa9502e742d57269f7b4b8166b4e2
}