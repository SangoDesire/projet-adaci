import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompteUser } from 'src/app/models/compte-user';
import { CompteUtilisateurApiService } from 'src/app/services/compte-utilisateur-api.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

//declaration d'un objet utiliser pour l'envoi des données à l'API
  userCompte: CompteUser;

//Injection de toastr du service de l'API
  constructor(private compteUserApiService: CompteUtilisateurApiService,
    private toastr: ToastrService,

//appel du service du routing
  private route : Router ) {
    this.userCompte = new CompteUser();
  }

//creation d'une methode pour faire la Connexion
  connexion() {
    console.log("test");

    this.compteUserApiService.login(this.userCompte).subscribe({
      next:(response: any) => {
        console.log(response)
        this.toastr.success('Super!!, Vous êtes connecté !', 'Toastr fun!').onHidden.subscribe(() => {
          //On vide l'Objet user
          this.userCompte = new CompteUser();

          //Redirection vers le dashboard
          this.route.navigate(["/dashboard"])
        });

      },
      error: error => {
        console.log(error)
        this.toastr.success('pas de compte à cette adresse !', 'Toastr fun!')
          //On vide l'Objet user


      }
    });
  }


}
