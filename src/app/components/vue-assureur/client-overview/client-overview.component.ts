import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { PersonneService } from 'src/app/service/personne.service';
import { Contrat } from 'src/app/models/Contrat';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  constructor(private fb: FormBuilder, private personService: PersonneService) { }

  public client: Person;
  public infosPersoForm: FormGroup;
  public coordonneesForm: FormGroup;

  ngOnInit() {
    this.client = this.personService.client;
    this.initForms();
  }

  private initForms() {
    this.infosPersoForm = this.fb.group({
      id: [this.client.id],
      firstName: [this.client.firstName],
      lastName: [this.client.lastName],
      marriedName: [this.client.marriedName],
      maritalStatus: this.client.maritalStatus,
      birthDate: [this.client.birthDate],
      birthPlace: [this.client.birthPlace]
    });
    this.coordonneesForm = this.fb.group({
      email: this.client.email,
      phone: this.client.phone,
      addressL1: this.client.address.addressLine1,
      addressL2: this.client.address.addressLine2,
      addressL3: this.client.address.addressLine3,
      zipCode: this.client.address.zipCode,
      city: this.client.address.city,
      country: this.client.address.country
    });
  }

  public only(filter: string, contract: Contrat[]) {
    return contract.filter(c => c.univers === filter);
  }

  public glow() {
    this.client.marriedName=" ";
    ['input#maritalStatus', '#opportunites', '#phone'].forEach(q => {
      document.querySelector(q).setAttribute('class', 'glowing');
    });

  }

}
