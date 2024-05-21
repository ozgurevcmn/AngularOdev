import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  input,
} from '@angular/core';
import { CategoryListItem } from '../../models/category-list-item';
import {
  ListGroupComponent,
  ListGroupItem,
  ListGroupItems,
} from '../../../../shared/components/list-group/list-group.component';

@Component({
  selector: 'app-category-list-group',
  standalone: true,
  imports: [CommonModule, ListGroupComponent],
  templateUrl: './category-list-group.component.html',
  styleUrl: './category-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListGroupComponent {
  @Input () initialSelectedCategoryId: number | null = null;
  @Output() changeSelect = new EventEmitter<number | null>();

  categoryList: CategoryListItem[] = [
    { id: 1, name: 'Beverages', description: "" },
    { id: 2, name: 'Canned Goods', description: ""},
    { id: 3, name: 'Dairy', description: "" },
    { id: 4, name: 'Frozen Foods', description: "" },
    { id: 5, name: 'Meat', description: "" },
    { id: 6, name: 'Produce', description: "" },
    { id: 7, name: 'Snacks', description: "" },
  ]; // Mock data

  onChangeSelect(selectedItemId: string | null) {
    this.changeSelect.emit(Number(selectedItemId));
  }

  get categoryListGroupItems(): ListGroupItems {
    return this.categoryList.map((category) => {
      const categoryListItem: ListGroupItem = {
        id: category.id.toString(),
        label: category.name,
      };
      return categoryListItem;
    });

    // return this.categoryList.map((category) => ({ label: category.name }));
  }
}
