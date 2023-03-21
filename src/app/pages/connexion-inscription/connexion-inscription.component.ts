import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.css']
})
export class ConnexionInscriptionComponent {
  nouvo = false;
  existant = true;
  affiche = false

  onclickExistant() {
    this.existant = true;
    this.nouvo = false;
    this.affiche = true
  }

  onclickNouvo() {
    this.nouvo = true;
    this.existant = false;
    this.affiche = true

  }

}
