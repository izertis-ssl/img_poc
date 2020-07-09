import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, ItemData } from '../services/data.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.page.html',
  styleUrls: ['./view-article.page.scss'],
})
export class ViewArticlePage implements OnInit {
  public article: ItemData;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.article = this.data.getDataById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Artículos' : '';
  }
}
