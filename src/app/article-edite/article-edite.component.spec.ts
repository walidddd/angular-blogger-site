import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditeComponent } from './article-edite.component';

describe('ArticleEditeComponent', () => {
  let component: ArticleEditeComponent;
  let fixture: ComponentFixture<ArticleEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleEditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
