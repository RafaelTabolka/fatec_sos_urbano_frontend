import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMakeReportComponent } from './user-make-report.component';

describe('UserMakeReportComponent', () => {
  let component: UserMakeReportComponent;
  let fixture: ComponentFixture<UserMakeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMakeReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMakeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
