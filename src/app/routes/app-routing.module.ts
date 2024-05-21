import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from '../features/categories/components/category-list/category-list.component';
import { CategoryEditComponent } from '../features/categories/components/category-edit/category-edit.component';
import { CategoryListGroupComponent } from '../features/categories/components/category-list-group/category-list-group.component';


const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/edit/:id', component: CategoryEditComponent },
  // Diğer rotalar burada tanımlanabilir
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Varsayılan rota
  { path: '**', redirectTo: '/categories' } // Bulunamayan rotalar için yönlendirme
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
