import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vue-assureur',
  templateUrl: './vue-assureur.component.html',
  styleUrls: ['./vue-assureur.component.scss']
})
export class VueAssureurComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public infosPersoForm: FormGroup;

  ngOnInit() {
    this.initForms();
  }

  private initForms() {
    this.infosPersoForm = this.fb.group({
      firstName: [''],
      lastName: [''],
    });

  }
}
