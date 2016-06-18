import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'filter-select',
    template: `
      <div class="margin-bottom-10">
        <select #selectList (change)="updateFilter.emit(selectList.value)">
            <option *ngFor="let filter of filters" value="{{filter.action}}">
                {{filter.friendly}}
            </option>
        </select>
      </div>
    `
})
export class FilterSelect {
    public filters = [
        {friendly: "All", action: 'SHOW_ALL'},
        {friendly: "Attending", action: 'SHOW_ATTENDING'},
        {friendly: "Guests", action: 'SHOW_WITH_GUESTS'}
    ];
    @Output() updateFilter : EventEmitter<string> = new EventEmitter<string>();
}