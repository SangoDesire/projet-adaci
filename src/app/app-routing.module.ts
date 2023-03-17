

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ConnexionInscriptionComponent } from './pages/connexion-inscription/connexion-inscription.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AgrementComponent } from './pages/agrement/agrement.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { NewDemandComponent } from './pages/new-demand/new-demand.component';
import { SuiviDemandComponent } from './pages/suivi-demand/suivi-demand.component';
import { DemandEncoursComponent } from './pages/demand-encours/demand-encours.component';
import { DemandesValideesComponent } from './pages/demandes-validees/demandes-validees.component';
import { RejeteesComponent } from './pages/rejetees/rejetees.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },

  {
    path: 'apropos',
    component: AproposComponent
  },
  {
  path: 'agrement',
    component: AgrementComponent
   },
  {
    path:'connexion-inscription',
    component:ConnexionInscriptionComponent
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule),
  },


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
