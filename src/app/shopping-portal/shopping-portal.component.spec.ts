import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPortalComponent } from './shopping-portal.component';

describe('ShoppingPortalComponent', () => {
  let component: ShoppingPortalComponent;
  let fixture: ComponentFixture<ShoppingPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
