import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any>{
    return this.http.get(this.apiUrl).pipe(
    catchError((error) => {
      console.error('API Error:', error);
      // Optionally transform or re-throw
      return throwError(() => new Error('Failed to fetch posts.'));
    })
  );
  }
}
