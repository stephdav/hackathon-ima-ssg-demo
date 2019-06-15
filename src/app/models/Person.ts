import { Address } from './Address';
import { Contact } from './Contact';

export class Person {

    constructor(object: any) {
        if (object.id) { this.id = object.id; }
        if (object.firstName) { this.firstName = object.firstName; }
        if (object.lastName) { this.lastName = object.lastName; }
        if (object.birthDate) { this.birthDate = new Date(object.birthDate); }
        if (object.birthPlace) { this.birthPlace = object.birthPlace; }
        if (object.history) {
            this.history = new Array<Contact>();
            object.history.map(h => {
                this.history.push(new Contact(h));
            });
        }
        if (object.address) { this.address = new Address(object.address); }
        return this;
    };

    id?: number;
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    birthPlace?: string;
    address?: Address;
    history?: Contact[];
}
