import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterInstitutionsComponent } from './admin-register-institutions.component';

describe('AdminRegisterInstitutionsComponent', () => {
  let component: AdminRegisterInstitutionsComponent;
  let fixture: ComponentFixture<AdminRegisterInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRegisterInstitutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRegisterInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
