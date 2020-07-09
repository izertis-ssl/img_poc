import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from '../services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: ItemData;
  visible: boolean = true; 

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.visible=true;
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  onError(){
    this.visible=true;
    this.article.photo='assets/defaultimg.png';
  }
}
