export class Contact {

    constructor(object: any) {
        if (object.dateTime) {  this.dateTime = object.dateTime; }
        if (object.context) {  this.context = object.context; }
        if (object.comments) {  this.comments = object.comments; }
        return this;
    }
    dateTime: string;
    context: string;
    comments: string;
}
