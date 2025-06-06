import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  submitFormData(data: any): Observable <any>{
    return this.http.post(this.apiUrl, data).pipe(
      catchError((error)=>{
         console.error('HTTP Error:', error);
        return throwError(() => new Error('Failed to submit form data.'));
      })
    )
  }
}
