import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutilMetierComponent } from './components/outil-metier/outil-metier.component';
import { VueAssureurComponent } from './components/vue-assureur/vue-assureur.component';
import { ClientOverviewComponent } from './components/vue-assureur/client-overview/client-overview.component';
import { BasketComponent } from './components/vue-assureur/basket/basket.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';

const routes: Routes = [
  { path: 'outil-metier', component: OutilMetierComponent },
  { path: 'data-analysis', component: DataAnalysisComponent },
  {
    path: 'vue-assureur',
    component: VueAssureurComponent,
    children: [
      {
        path: 'client-overview',
        component: ClientOverviewComponent,
      },
      {
        path: 'basket',
        component: BasketComponent,
      },
      { path: '', redirectTo: 'basket', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
