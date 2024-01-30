import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable
({
  providedIn: 'root'
})

export class ProductService
{
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductById(id: number): Observable<Product>
  {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
