import { Component,OnInit } from '@angular/core';
import { DocumentApiService } from '../../services/document-api.service';
import { Document } from '../../models/document';

@Component({
  selector: 'app-new-demand',
  templateUrl: './new-demand.component.html',
  styleUrls: ['./new-demand.component.css']
})
export class NewDemandComponent implements OnInit{

//Définition d'un tableau
  tabdoc: Document[]=[];

//Injection ...(Injection du constructeur )
    constructor(private document: DocumentApiService) {
    }
  ngOnInit() {
    this.document.findAll().subscribe((data: any) => {
      console.log(data)
      this.tabdoc = data
      console.log("TREZA" + this.tabdoc);
    });

    }


  }


