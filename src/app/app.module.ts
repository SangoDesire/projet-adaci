import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { AgrementComponent } from './pages/agrement/agrement.component';
import { PiecesComponent } from './pages/pieces/pieces.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionInscriptionComponent } from './pages/connexion-inscription/connexion-inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { EnvoiComponent } from './pages/envoi/envoi.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    AproposComponent,
    AgrementComponent,
    PiecesComponent,
    ConnexionComponent,
    InscriptionComponent,
    ConnexionInscriptionComponent,
    PaiementComponent,
    ProfilComponent,
    EnvoiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
