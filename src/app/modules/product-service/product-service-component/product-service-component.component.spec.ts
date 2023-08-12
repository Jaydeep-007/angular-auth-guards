import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceComponent } from './product-service-component.component';

describe('ProductServiceComponent', () => {
  let component: ProductServiceComponent;
  let fixture: ComponentFixture<ProductServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
