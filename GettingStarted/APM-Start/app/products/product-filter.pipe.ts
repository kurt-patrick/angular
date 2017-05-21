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
}