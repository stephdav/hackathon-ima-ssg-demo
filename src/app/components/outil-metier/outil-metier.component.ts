import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { PersonneService } from 'src/app/service/personne.service';
import { Contrat } from 'src/app/models/Contrat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outil-metier',
  templateUrl: './outil-metier.component.html',
  styleUrls: ['./outil-metier.component.scss']
})
export class OutilMetierComponent implements OnInit {

  constructor(private fb: FormBuilder, private personService: PersonneService,
    private router: Router) { }

  public client: Person;
  public infosPersoForm: FormGroup;
  public coordonneesForm: FormGroup;

  submitted = false;

  nomAppelant: string;

  ngOnInit() {
    this.client = this.personService.client;
    console.log('coucou');
    this.glow();
  }

  onSubmit() {

    this.submitted = true;
    this.router.navigateByUrl('data-analysis');

  }

  public glow() {
    this.client.marriedName = ' ';
    ['#phone'].forEach(q => {
      document.querySelector(q).setAttribute('class', 'glowing');
    });

  }

}