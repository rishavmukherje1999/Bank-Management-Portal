import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIssueComponent } from './chart-issue.component';

describe('ChartIssueComponent', () => {
  let component: ChartIssueComponent;
  let fixture: ComponentFixture<ChartIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
