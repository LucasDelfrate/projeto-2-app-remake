import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { confirmationType } from '../components/confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  url = 'http://localhost:20001/api/confirmation';

  constructor(private http: HttpClient) {} 
    sendConfirmation(data: confirmationType): Observable<any>{
      const body = data ;
      return this.http.post(`${this.url}`, body);
    }

    getProfessors(ra: string): Observable<any> {
      return this.http.get(`${this.url}/${ra}`);
    }
  }
