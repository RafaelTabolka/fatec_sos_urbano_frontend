import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowReportComponent } from './how-report.component';

describe('HowReportComponent', () => {
  let component: HowReportComponent;
  let fixture: ComponentFixture<HowReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
