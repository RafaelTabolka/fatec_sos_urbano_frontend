import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplaintsComponent } from './complaints.component';

describe('ComplaintsComponent', () => {
  let component: ComplaintsComponent;
  let fixture: ComponentFixture<ComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
})
