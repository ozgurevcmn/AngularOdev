import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { ProductListItem } from '../../features/products/models/product-list-item';
import { ProductListComponent } from '../../features/products/components/product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { IfNotDirective } from '../../shared/directives/if-not.directive';
import { isPlatformBrowser, CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule,
    CategoryListGroupComponent,
    ProductListComponent,
    ProductCardListComponent,
    IfNotDirective,
    NavbarComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  selectedCategoryId!: number | null;
  oldUser: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private change:ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.getProductFiltersFromRoute();
    this.detectOldUser();
  }
  detectOldUser() {
    if (isPlatformBrowser(this.platformId)) {
      const localStorage = this.document.defaultView?.localStorage;
      if (localStorage) {
        const isOldUser = Boolean(localStorage.getItem('isOldUser'));
        if (!isOldUser) {
          localStorage.setItem('isOldUser', 'true');
          return;
        }
        setTimeout(() => {
          this.oldUser = isOldUser;
          this.change.markForCheck();
        }, 5000);
      }
    }
  }

  getProductFiltersFromRoute() {
    this.route.queryParams
      .subscribe((queryParams) => {
        const categoryId = queryParams['categoryId'];
        if (categoryId) this.selectedCategoryId = Number(categoryId);
      })
      .unsubscribe();
  }

  onChangeCategorySelect(event: number | null) {
    this.selectedCategoryId = event;

    this.router.navigate([], {
      queryParams: { categoryId: this.selectedCategoryId },
      relativeTo: this.route,
    });
  }
  
  onViewProduct(product: ProductListItem) {
    this.router.navigate(['products', 'detail', product.id]);
  }  
}
