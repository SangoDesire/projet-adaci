import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.css']
})
export class ConnexionInscriptionComponent {
  nouvo = false;
  existant = true;

  onclickExistant() {
    this.existant = true;
    this.nouvo = false;
  }

  onclickNouvo() {
    this.nouvo = true;
    this.existant = false;
  }

}
