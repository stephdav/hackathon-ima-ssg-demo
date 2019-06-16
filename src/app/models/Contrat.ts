export class Contrat {

    constructor(object: any) {
        if (object.desc) {  this.desc = object.desc; }
        if (object.univers) {  this.univers = object.univers; }
        return this;
    }
    desc: string;
    univers: string;
}
