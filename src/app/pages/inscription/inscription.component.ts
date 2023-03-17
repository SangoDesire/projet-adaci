import { Component } from '@angular/core';
import { CompteUtilisateurApiService } from '../../services/compte-utilisateur-api.service';
import { CompteUser } from 'src/app/models/compte-user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
//declaration d'un objet utiliser pour l'envoi des données à l'API
  userCompte: CompteUser;
  
  

  //Injection du service de l'API

  constructor(private compteUserApiService: CompteUtilisateurApiService,
    private toastr: ToastrService,
    //appel du service du routing
  private route : Router ) {
    this.userCompte = new CompteUser();
  }

  register() {
    this.compteUserApiService.inscription(this.userCompte).subscribe({
      next: response => {
        console.log(response)
        this.toastr.success('Oh, etoumis a consommé API !', 'Toastr fun!').onHidden.subscribe(() => {
          //On vide l'Objet user
          this.userCompte = new CompteUser();  
          
          //On redirrige vers la page de connexion
          this.route.navigate(["/connexion-inscription"])

        });
             
      },
      error: error => {
        console.log(error)
      }
    });
  }

}

