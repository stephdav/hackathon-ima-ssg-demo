import { Component } from '@angular/core';

import { Formulaire } from './formulaire';

@Component({
  selector: 'app-outil-metier',
  templateUrl: './outil-metier.component.html',
  styleUrls: ['./outil-metier.component.scss']
})
export class OutilMetierComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Formulaire(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}