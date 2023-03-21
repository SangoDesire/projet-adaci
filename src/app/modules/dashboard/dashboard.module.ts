import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from '../../pages/dashboard-home/dashboard-home.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NewDemandComponent } from '../../pages/new-demand/new-demand.component';
import { SuiviDemandComponent } from '../../pages/suivi-demand/suivi-demand.component';
import { DemandEncoursComponent } from '../../pages/demand-encours/demand-encours.component';
import { DemandesValideesComponent } from '../../pages/demandes-validees/demandes-validees.component';
import { RejeteesComponent } from '../../pages/rejetees/rejetees.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    NewDemandComponent,
    SuiviDemandComponent,
    DemandEncoursComponent,
    DemandesValideesComponent,
    RejeteesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    DashboardHomeComponent,
    NewDemandComponent,
    SuiviDemandComponent,
    DemandEncoursComponent,
    DemandesValideesComponent,
    RejeteesComponent
  ]

})
export class DashboardModule { }
