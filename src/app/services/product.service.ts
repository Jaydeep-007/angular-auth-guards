import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com';
  private authSecretKey = 'Bearer Token';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem(this.authSecretKey);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    });
  }

  getProducts() : Observable<any[]>{
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
  }
}
