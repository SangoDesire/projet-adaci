import {Injectable} from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { CompteUser } from '../models/compte-user';
import { url_path } from '../constants/app.constant';



@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }
 //API  pour la connexion 
  login(loginData: CompteUser) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/login',
      data: JSON.stringify(loginData)
    });
  }

  //API ¨pour l'inscription d'un nouvel user 
  inscription(registerData: CompteUser) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE,
      data: JSON.stringify(registerData)
    });
  }
  
 //API ¨pour la decoonexion 
  logout(id: number) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/logout/' + id,
      data: JSON.stringify({})
    });
  }
}
