import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersuccesspageComponent } from './registersuccesspage.component';

describe('RegistersuccesspageComponent', () => {
  let component: RegistersuccesspageComponent;
  let fixture: ComponentFixture<RegistersuccesspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersuccesspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersuccesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
