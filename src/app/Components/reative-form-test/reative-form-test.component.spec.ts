import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormTestComponent } from './reative-form-test.component';

describe('ReativeFormTestComponent', () => {
  let component: ReativeFormTestComponent;
  let fixture: ComponentFixture<ReativeFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
