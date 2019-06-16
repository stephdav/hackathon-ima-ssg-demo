import { Address } from './Address';
import { Contact } from './Contact';
import { Contrat } from './Contrat';
import { Opportunity } from './Opportunity';

export class Person {

    constructor(obj: any) {
        const object = obj.default;
        if (object.id) { this.id = object.id; }
        if (object.firstName) { this.firstName = object.firstName; }
        if (object.lastName) { this.lastName = object.lastName; }
        if (object.marriedName) { this.marriedName = object.marriedName; }
        if (object.maritalStatus) { this.maritalStatus = object.maritalStatus; }
        if (object.birthDate) { this.birthDate = object.birthDate; }
        if (object.birthPlace) { this.birthPlace = object.birthPlace; }
        if (object.email) { this.email = object.email; }
        if (object.history) {
            this.history = new Array<Contact>();
            object.history.map(h => {
                this.history.push(new Contact(h));
            });
        }
        if (object.address) { this.address = new Address(object.address); }
        if (object.contracts) {
            this.contracts = new Array<Contrat>();
            object.contracts.map(h => {
                this.contracts.push(new Contrat(h));
            });
        }
        if (object.opportunities) {
            this.opportunities = new Array<Opportunity>();
            object.opportunities.map(h => {
                this.opportunities.push(new Opportunity(h));
            });
        }
        return this;
    };

    id?: number;
    firstName?: string;
    lastName?: string;
    marriedName?: string;
    maritalStatus?: string;
    birthDate?: Date;
    birthPlace?: string;
    address?: Address;
    email?: string;
    history?: Contact[];
    contracts?: Contrat[];
    opportunities?: Opportunity[];
}
