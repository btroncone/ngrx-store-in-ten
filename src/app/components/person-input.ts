import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'person-input',
    template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
    `
})
export class PersonInput {
    @Output() addPerson = new EventEmitter();

    add(personInput){
        this.addPerson.emit(personInput.value);
        personInput.value = '';
    }
}