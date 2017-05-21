import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './model';

@Component({
  // <Inline Templating>
  // template: ``  // use for inline templating
  // NOTE:  if you place all your code in a template file (.html) then 
  //        the moduleId property must be added as below otherwise  the
  //        page fails to load/display and has error promise not met
  //        tihis is required so relative paths work for files
  // <URL Templating>
  // moduleId: module.id,
  // templateUrl: 'file.html'
  // <Selector>
  // This is the tag name you will reference in the html e.g. <customer-detail></customer-detail>
  // selector: 'name'
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  { 
  
  // By adding the attribute Input you are making the property public and available to other controls
  @Input() customer: Customer;
  @Output() pagingClicked = new EventEmitter<number>();

  showAddress = false;

  // Paging right: Move to the next customer
  pageRight() {
    this.pagingClicked.emit(1);
  }

  // Paging left: Move to the previous customer or the predecessor
  pageLeft() {
    this.pagingClicked.emit(-1);
  }


}
