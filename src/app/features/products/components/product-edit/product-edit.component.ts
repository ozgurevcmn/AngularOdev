import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProductById(this.productId).subscribe(
        (data: any) => {
          this.product = data;
        }
      );
    });
  }

  submitForm() {
    this.productService.updateProduct(this.productId, this.product).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error: any) => {
        console.error('Güncelleme hatası:', error);
      }
    );
  }

  deleteProduct() {
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(this.productId).subscribe(
        () => {
          // Başarılı silme durumunda yapılacak işlemler
        },
        (error: any) => {
          console.error('Silme hatası:', error);
        }
      );
    }
  }
}
