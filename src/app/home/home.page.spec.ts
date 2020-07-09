import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArticleComponentModule } from '../article/article.module';

import { HomePage } from './home.page';

import { DataService } from '../services/data.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), ArticleComponentModule, RouterModule.forRoot([])]
      
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('items should be not null', () => {
    expect(component.items).not.toBeNull();
  });

  it('search term should be not null', () => {
    expect(component.searchTerm).not.toBeNull();
  });

});
