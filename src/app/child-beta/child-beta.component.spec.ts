import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBetaComponent } from './child-beta.component';

describe('ChildBetaComponent', () => {
  let component: ChildBetaComponent;
  let fixture: ComponentFixture<ChildBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
