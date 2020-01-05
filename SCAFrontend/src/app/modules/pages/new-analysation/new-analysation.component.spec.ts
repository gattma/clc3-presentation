import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnalysationComponent } from './new-analysation.component';

describe('NewAnalysationComponent', () => {
  let component: NewAnalysationComponent;
  let fixture: ComponentFixture<NewAnalysationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnalysationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnalysationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
