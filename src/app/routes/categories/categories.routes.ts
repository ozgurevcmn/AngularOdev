import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { CategoriesComponent } from './category-page/categories.component';
import { NewCategoryPageComponent } from './new-category-page/new-category-page.component';

export const categoriesRoutes: Routes = [
  {
    path: 'categories',
    loadComponent: () => import('./category-page/categories.component').then(m => m.CategoriesComponent),
 
  },
  {
    path: 'categories/new',
    loadComponent: () => import('./new-category-page/new-category-page.component').then(m => m.NewCategoryPageComponent),
  },
];
