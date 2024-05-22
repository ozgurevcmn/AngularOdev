import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  categoryId: number = 0;
  category!: Category

  constructor(
    private route: ActivatedRoute,
    protected categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.categoryService.getCategoryById(this.categoryId).subscribe((data: Category) => {
        this.category = data;
      });
    });
  }

  submitForm() {
    this.categoryService.updateCategory(this.categoryId, this.category).subscribe(
      () => {
        this.router.navigate(['/categories']);
      },
      (error: any) => {
        if (error instanceof Error) {
          console.error('Update Error:', error.message);
        } else {
          console.error('Update Error:', error);
        }
      }
    );
  }

  deleteCategory() {
    if (confirm("Are you sure you want to delete this category?")) {
      this.categoryService.deleteCategory(this.categoryId).subscribe(
        () => {
          // Başarılı silme durumunda yapılacak işlemler
        },
        (error: any) => {
          console.error('Delete Error:', error);
        }
      );
    }
  }
}
