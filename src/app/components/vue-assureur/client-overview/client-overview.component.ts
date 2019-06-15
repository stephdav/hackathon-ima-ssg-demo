import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public infosPersoForm: FormGroup;

  ngOnInit() {
    this.initForms();
  }

  private initForms() {
    this.infosPersoForm = this.fb.group({
      firstName: [ 'Alain' ],
      lastName: [  'De Trois-Quatre'],
      birthDate: [{ value: '', disabled: true }],
      birthPlace: [{ value: '', disabled: true }]
    });
  }
}
