import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent implements OnInit {
  formGroup!: FormGroup;  
  comparativeIsBetween: boolean = false;
  comparativeIsNotBetween: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'name': ['Selecionar', Validators.required],
      'userStatus': ['Selecionar', [Validators.required]],
      'comparative': ['Selecionar', [Validators.required]],
      'quantity': ['Selecionar', [Validators.required]],
      'minValue': ['', [Validators.required]],
      'maxValue': ['', [Validators.required]]
    })

    this.formGroup.valueChanges.subscribe((value) => {
      this.comparativeIsBetween = false;
      this.comparativeIsNotBetween = true;
    
      if (value.comparative == 'between') {
        this.comparativeIsBetween = true;
        this.comparativeIsNotBetween = false
      }
      
    })
  }



}
