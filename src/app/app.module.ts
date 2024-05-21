import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // NgModel için
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CategoryListComponent } from '../app/features/categories/components/category-list/category-list.component';
import { CategoryEditComponent } from '../app/features/categories/components/category-edit/category-edit.component';
import { HttpClientModule } from '@angular/common/http'; // HTTP istekleri için

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/edit/:id', component: CategoryEditComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Varsayılan rota
  { path: '**', redirectTo: '/categories' } // Bulunamayan rotalar için yönlendirme
];

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent
    // Diğer bileşenler
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule, // NgModel için
    HttpClientModule,
    RouterModule.forRoot(routes), // Router modülünü burada ekliyoruz
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
