import { Component } from '@angular/core';
import { DataService, ItemData } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public searchTerm: string = "";
  public items: ItemData[] = [];

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.data.filterItems(this.searchTerm);
  }

  getData(): ItemData[] {
    return this.data.getData();
  }

}
