import { CurrencyPipe, LowerCasePipe, NgFor, SlicePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../Product';
import { catchError, map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component
({
  selector: 'app-product-list',
  standalone: true,
  imports: 
  [ 
    HttpClientModule, 
    NgFor, 
    LowerCasePipe, 
    SlicePipe, 
    CurrencyPipe, 
    RouterLink 
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent 
{
  products: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductService) {}

  ngOnInit()
  {
    // this.http.get('https://fakestoreapi.com/products').subscribe( (data) => this.products = <Product[]>data );
    // this.http.get<Product[]>('https://fakestoreapi.com/products')
    this.productService.getProducts()
    .pipe(map((data: any) => data.map((p:any) => {return {...p, price: p.price *= 40}})))
    .subscribe((data) => this.products = data);
  }
}
