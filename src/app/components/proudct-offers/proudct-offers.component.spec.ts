import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctOffersComponent } from './proudct-offers.component';

describe('ProudctOffersComponent', () => {
  let component: ProudctOffersComponent;
  let fixture: ComponentFixture<ProudctOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudctOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
