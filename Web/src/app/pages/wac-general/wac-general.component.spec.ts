import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WacGeneralComponent } from './wac-general.component';

describe('WacGeneralComponent', () => {
  let component: WacGeneralComponent;
  let fixture: ComponentFixture<WacGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WacGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WacGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
