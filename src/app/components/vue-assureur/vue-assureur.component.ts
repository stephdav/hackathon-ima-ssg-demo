import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/service/personne.service';
@Component({
  selector: 'app-vue-assureur',
  templateUrl: './vue-assureur.component.html',
  styleUrls: ['./vue-assureur.component.scss']
})
export class VueAssureurComponent implements OnInit {

  constructor(private router: Router, private persService: PersonneService) { }

  ngOnInit() {

  }

  ima() {
    this.persService.glow = false;
    this.router.navigateByUrl('/outil-metier');
  }
}
