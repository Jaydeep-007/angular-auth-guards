import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctRatingComponent } from './proudct-rating.component';

describe('ProudctRatingComponent', () => {
  let component: ProudctRatingComponent;
  let fixture: ComponentFixture<ProudctRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
