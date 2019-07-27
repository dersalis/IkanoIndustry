import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WacCommandComponent } from './wac-command.component';

describe('WacCommandComponent', () => {
  let component: WacCommandComponent;
  let fixture: ComponentFixture<WacCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WacCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WacCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
