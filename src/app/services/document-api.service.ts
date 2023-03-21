import {Injectable} from '@angular/core';
import { ApiRequestService } from './api-request.service';
import { CompteUser } from '../models/compte-user';
import { url_path } from '../constants/app.constant';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentApiService {
  constructor(private _apiRequestService: ApiRequestService) {
  }

 //API  pour le document
 findAll() {
   return this._apiRequestService.get(url_path.DOCUMENT_BASE)
  }
}

