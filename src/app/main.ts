import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {PersonList} from './components/person-list';
import {PersonInput} from './components/person-input';
import {FilterSelect} from './components/filter-select';


@Component({
	selector: 'app',
	template: `
      <h3>Party Planner</h3>
      <filter-select
        (updateFilter)="updateFilter($event)"
      >
      </filter-select>
      <person-input
        (addPerson)="addPerson($event)"
      >
      </person-input>
      <person-list
        [people]="people"
        [filter]="filter"
        (addGuest)="addGuest($event)"
        (removeGuest)="removeGuest($event)"
        (removePerson)="removePerson($event)"
        (toggleAttending)="toggleAttending($event)"
      >
      </person-list>
    `,
	directives: [PersonList, PersonInput, FilterSelect]
})
export class App {
	public people = [];
	private filter = 'SHOW_ALL';

	addPerson(name){
		this.people.push({ name, guests: 0, attending: false })
	}

	addGuest(person){
		person.guests += 1;
	}

	removeGuest(person){
		person.guests -= 1;
	}

	removePerson(person){
		const index = this.people.indexOf(person);
		this.people.splice(index, 1);
	}


	toggleAttending(person){
		person.attending = !person.attending;
	}

	updateFilter(filter){
		this.filter = filter;
	}
}

bootstrap(App, []);