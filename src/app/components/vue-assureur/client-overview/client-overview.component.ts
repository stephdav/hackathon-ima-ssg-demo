import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { PersonneService } from 'src/app/service/personne.service';
import { Contrat } from 'src/app/models/Contrat';
import { MatTooltipModule } from '@angular/material';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  constructor(private fb: FormBuilder, public personService: PersonneService) { }

  public client: Person;
  public infosPersoForm: FormGroup;
  public coordonneesForm: FormGroup;

  ngOnInit() {
    this.client = this.personService.client;
    if (this.personService.glow) { this.glow(); }
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
    this.client.marriedName = ' ';
    ['input#maritalStatus', '#opportunites', '#phone'].forEach(q => {
      document.querySelector(q).setAttribute('class', 'glowing');
    });
  }

  public toolTipMariage() {
    console.log("Info Situation maritale à vérifier (confiance 70%)");
    return this.personService.glow ? "Info Situation maritale à vérifier (confiance 70%)" : ""
  }
  public toolTipOpp(i: number) {
    const info = this.client.opportunities[i].desc;
    const trust = this.client.opportunities[i].trust;
    return this.personService.glow
      ? `Info ${info} à valoriser (confiance ${trust}%)`
      : "";
  }

}
