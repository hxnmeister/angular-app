import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent 
{
  id: number;
  product: Product | any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private productService: ProductService)
  {
    this.id = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit()
  {
    this.productService.getProductById(this.id)
    .subscribe((data) => this.product = data);
  }
}
