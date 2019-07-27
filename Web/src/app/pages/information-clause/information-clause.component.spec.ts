import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationClauseComponent } from './information-clause.component';

describe('InformationClauseComponent', () => {
  let component: InformationClauseComponent;
  let fixture: ComponentFixture<InformationClauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationClauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationClauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
