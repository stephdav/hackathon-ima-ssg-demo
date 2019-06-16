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
  private _new: Person;
  private _glow: boolean;

  public getTestPerson(id?: number): Person {
    return new Person(testPerson as any);
  }

  get client() {
    return this._client ? this._client : this.getTestPerson();
  }

  set client(person: Person) {
    this._new = person;
    this._client = person;
  }

  public activateGlow() {
    this._glow = true;
  }

  get glow() {
    return this._glow;
  }

  set glow(b: boolean){
    this._glow = b;
  }
}
