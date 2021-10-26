import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedPagesComponent } from './favorited-pages.component';

describe('FavoritedPagesComponent', () => {
  let component: FavoritedPagesComponent;
  let fixture: ComponentFixture<FavoritedPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritedPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
