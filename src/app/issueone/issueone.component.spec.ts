import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueoneComponent } from './issueone.component';

describe('IssueoneComponent', () => {
  let component: IssueoneComponent;
  let fixture: ComponentFixture<IssueoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
