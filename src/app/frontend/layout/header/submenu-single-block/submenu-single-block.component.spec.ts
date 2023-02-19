import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuSingleBlockComponent } from './submenu-single-block.component';

describe('SubmenuSingleBlockComponent', () => {
  let component: SubmenuSingleBlockComponent;
  let fixture: ComponentFixture<SubmenuSingleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmenuSingleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuSingleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
