import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgetItPasswordComponent } from './user-forget-it-password.component';

describe('UserForgetItPasswordComponent', () => {
  let component: UserForgetItPasswordComponent;
  let fixture: ComponentFixture<UserForgetItPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForgetItPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserForgetItPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
