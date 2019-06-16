export class Address {
    constructor(object: any) {
        if (object.addressLine1) { this.addressLine1 = object.addressLine1; }
        if (object.addressLine2) { this.addressLine2 = object.addressLine2; }
        if (object.addressLine3) { this.addressLine3 = object.addressLine3; }
        if (object.zipCode) { this.zipCode = object.zipCode; }
        if (object.city) { this.city = object.city; }
        if (object.country) { this.country = object.country; }
        return this;
    }
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    zipCode: number;
    city: string;
    country: string;
}
