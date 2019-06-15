export class Contact {

    constructor(object: any) {
        if (object.contactDate) {  this.contactDate = object.contactDate; }
        if (object.comments) {  this.comments = object.comments; }
        return this;
    }
    contactDate: Date;
    comments: string;
}
