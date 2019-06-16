import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { PersonneService } from 'src/app/service/personne.service';
import { Contrat } from 'src/app/models/Contrat';

@Component({
  selector: 'app-outil-metier',
  templateUrl: './outil-metier.component.html',
  styleUrls: ['./outil-metier.component.scss']
})
export class OutilMetierComponent implements OnInit {

  constructor(private fb: FormBuilder, private personService: PersonneService) { }

  public client: Person;
  public infosPersoForm: FormGroup;
  public coordonneesForm: FormGroup;

  submitted = false;

  nomAppelant: string;

  ngOnInit(){
    this.client = this.personService.client;
    console.log('coucou');
  }

  onSubmit() {

    this.submitted = true;
    console.log('nom : ', this.client.firstName);

  }

}