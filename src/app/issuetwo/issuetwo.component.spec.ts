import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuetwoComponent } from './issuetwo.component';

describe('IssuetwoComponent', () => {
  let component: IssuetwoComponent;
  let fixture: ComponentFixture<IssuetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
