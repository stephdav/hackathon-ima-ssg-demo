import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutilMetierComponent } from './components/outil-metier/outil-metier.component';
import { VueAssureurComponent } from './components/vue-assureur/vue-assureur.component';

const routes: Routes = [
  { path: 'outil-metier', component: OutilMetierComponent },
  { path: 'vue-assureur', component: VueAssureurComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
