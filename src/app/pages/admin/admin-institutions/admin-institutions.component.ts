import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-institutions',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RevealOnScrollDirective, CommonModule, ReactiveFormsModule],
  templateUrl: './admin-institutions.component.html',
  styleUrl: './admin-institutions.component.css'
})
export class AdminInstitutionsComponent implements OnInit {
  comparativeIsBetween: boolean = false;
  comparativeIsNotBetween: boolean = true;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      "name": ["Selecionar", Validators.required],
      "type": ["Selecionar", Validators.required],
      "status": ["Selecionar", Validators.required],
      "comparative": ["Selecionar", Validators.required],
      "quantity": ["", Validators.required],
      "minValue": ["", Validators.required],
      "maxValue": ["", Validators.required]
    })

    this.formGroup.valueChanges.subscribe((value) => {
      this.comparativeIsBetween = false;
      this.comparativeIsNotBetween = true;
      
      if (value.comparative == "Between") {
        this.comparativeIsBetween = true;
        this.comparativeIsNotBetween = false;
      }
    })
  }

}
