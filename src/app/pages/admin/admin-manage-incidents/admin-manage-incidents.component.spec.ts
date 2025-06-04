import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageIncidentsComponent } from './admin-manage-incidents.component';

describe('AdminManageIncidentsComponent', () => {
  let component: AdminManageIncidentsComponent;
  let fixture: ComponentFixture<AdminManageIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageIncidentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
