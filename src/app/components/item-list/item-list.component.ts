
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  sortCriteria: string = '';
  searchQuery: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data;
      this.filteredItems = [...this.items];
    });
  }

  // sort the item-list accordint to the price ascending or descending

  sortItems(): void {
    if (this.sortCriteria === 'asc') {
      this.filteredItems.sort((a, b) => a.price - b.price);
    } else if (this.sortCriteria === 'desc') {
      this.filteredItems.sort((a, b) => b.price - a.price);
    }
  }

// filter the item-list by there description or title of the given list
  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
