import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WacOffersComponent } from './wac-offers.component';

describe('WacOffersComponent', () => {
  let component: WacOffersComponent;
  let fixture: ComponentFixture<WacOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WacOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WacOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
