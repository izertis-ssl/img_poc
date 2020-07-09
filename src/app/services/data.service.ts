import { Injectable } from '@angular/core';

export interface ItemData {
  id: number;
  name: string;
  photo: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  items: ItemData[] = [];
  lorem : string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor() { 

    for (let i = 0; i < 4000; i++) {
      this.items.push({
        id: i+1,
        name: "Articulo-" + (i+1),
        photo: this.getImgSrc(i+1),
        text: this.lorem.substring(Math.random() * (this.lorem.length - 1) + 0, Math.random() * (this.lorem.length - 100) + 100)
      });
    }

  }

  public getData(): ItemData[] {
    return this.items;
  }

  public getDataById(id: number): ItemData {
    return this.items[id-1];
  }

  public getImgSrc(id: number) {
    const src = `https://picsum.photos/id/${id}/500/500.jpg`;
    return src;
  }

  filterItems(searchTerm:string) {
    return this.items.filter(item => {
      return (item.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    });
  }
}
