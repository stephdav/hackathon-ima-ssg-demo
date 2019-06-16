import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss']
})
export class DataAnalysisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigateByUrl('/vue-assureur');
  }
}
