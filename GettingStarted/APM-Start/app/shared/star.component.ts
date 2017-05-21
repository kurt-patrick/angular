import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starwidth: number;
    @Output() ratingClicked = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log("ngOnChanges()");
        console.log("this.rating: " + this.rating);
        this.starwidth = this.rating * 86/5;
        console.log("this.starwidth: " + this.starwidth);
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating}`);
    }


}