import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from 'src/app/pages/dashboard-home/dashboard-home.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { DemandEncoursComponent } from 'src/app/pages/demand-encours/demand-encours.component';
import { DemandesValideesComponent } from 'src/app/pages/demandes-validees/demandes-validees.component';
import { NewDemandComponent } from 'src/app/pages/new-demand/new-demand.component';
import { RejeteesComponent } from 'src/app/pages/rejetees/rejetees.component';
import { SuiviDemandComponent } from 'src/app/pages/suivi-demand/suivi-demand.component';

const routes: Routes = [
  {
    path:'', component: DashboardComponent,
    children: [
      {
        path:'',
        component:NewDemandComponent
      },
      {
        path:'nouvelle-demande',
        component:NewDemandComponent
      },
      {
        path:'suivi-demande',
        component:SuiviDemandComponent
      },
      {
        path:'demandes-encours',
        component:DemandEncoursComponent
      },
      {
        path:'demandes-validees',
        component:DemandesValideesComponent
      },
      {
        path:'demandes-rejetees',
        component:RejeteesComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
