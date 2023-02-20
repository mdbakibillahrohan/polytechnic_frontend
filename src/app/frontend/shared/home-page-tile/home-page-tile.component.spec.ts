import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTileComponent } from './home-page-tile.component';

describe('HomePageTileComponent', () => {
  let component: HomePageTileComponent;
  let fixture: ComponentFixture<HomePageTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
