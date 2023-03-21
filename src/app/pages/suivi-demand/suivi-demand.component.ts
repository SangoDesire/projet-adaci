import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suivi-demand',
  templateUrl: './suivi-demand.component.html',
  styleUrls: ['./suivi-demand.component.css']
})
export class SuiviDemandComponent {

  listDemande: any[] = [];
  documents: any[] = [];




  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.docDigit();

  }
  docDigit(): void{
    this.http.get<any[]>("http://localhost:8080/api/Document").subscribe(
      data => {
        console.log(data);
        this.listDemande = data;
        this.documents = this.listDemande;
      }
    )
  }

}
