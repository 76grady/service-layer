import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAlphaComponent } from './child-alpha.component';

describe('ChildAlphaComponent', () => {
  let component: ChildAlphaComponent;
  let fixture: ComponentFixture<ChildAlphaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAlphaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAlphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
