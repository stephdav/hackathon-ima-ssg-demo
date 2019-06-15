export class Opportunity {

    constructor(object: any) {
        if (object.desc) {  this.desc = object.desc; }
        if (object.trust) {  this.trust = object.trust; }
        return this;
    }
    desc: string;
    trust: string;
}
