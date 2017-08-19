import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Filter } from "./filter";

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html'
})
export class FilterListComponent {
    @Input() filter: Filter = new Filter();

    // FDLM https://www.sitepoint.com/angular-2-components-inputs-outputs/
    @Output() filterRequested: EventEmitter<Filter> = new EventEmitter<Filter>();

    search(): void {
        this.filterRequested.emit(this.filter);
    }
}