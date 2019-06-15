import { Injectable } from '@angular/core';
import * as testPerson from './../../assets/test-person.json';
import { Person } from '../models/Person.js';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor() { }

// tslint:disable-next-line: variable-name
  private _client: Person;

  public getTestPerson(id?: number): Person {
    return new Person(testPerson);
  }

  get client() {
    return this._client ? this._client : this.getTestPerson();
  }

  set client(person: Person) {
    this._client = person;
  }
}
