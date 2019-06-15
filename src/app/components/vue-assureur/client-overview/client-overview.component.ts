import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  constructor(private fb: FormBuilder, private personService: PersonneService) { }

  public client: Person;
  public infosPersoForm: FormGroup;

  ngOnInit() {
    this.client = this.personService.client;
    this.initForms();
  }

  private initForms() {
    this.infosPersoForm = this.fb.group({
      id: [this.client.id],
      firstName: [ this.client.firstName ],
      lastName: [ this.client.lastName],
      birthDate: [{ value: this.client.birthDate, disabled: true }],
      birthPlace: [{ value: this.client.birthPlace, disabled: true }]
    });
  }
}
