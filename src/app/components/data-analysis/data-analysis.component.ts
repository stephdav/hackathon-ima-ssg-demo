import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent implements OnInit {

  constructor(private router: Router, private personneService: PersonneService) { }

  ngOnInit() {
  }

  next() {
    this.personneService.activateGlow();
    this.router.navigateByUrl('/vue-assureur');
  }
}
