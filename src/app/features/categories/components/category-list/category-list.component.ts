import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CategoryListItem } from '../../models/category-list-item';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryListItem[] = [];

  constructor(private router: Router,
    private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getList().subscribe(categories => {
      this.categories = categories;
    });
  }

  editCategory(categoryId: number): void {
    this.router.navigate(['/categories/edit', categoryId]);
  }
}
