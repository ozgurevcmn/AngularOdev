import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service'; // Make sure the path to the service is correct
import { ProductListItem } from '../../models/product-list-item'; // Make sure the path to the model is correct
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<ProductListItem>();
  
  
  products: ProductListItem[] = [
    { id: 1, categoryId: 1, name: 'Product 1', price: 100, description: 'Description 1', imageUrl:"" },
    { id: 2, categoryId: 1, name: 'Product 2', price: 200, description: 'Description 2', imageUrl:"" },
    // Diğer ürünler

  ];

  selectProduct(product: ProductListItem): void {
    this.productSelected.emit(product);
  }

  constructor(private router: Router,
              private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getList().subscribe(products => {
      this.products = products;
    });
  }

  editProduct(productId: number): void {
    this.router.navigate(['/products/edit', productId]);
  }
}
