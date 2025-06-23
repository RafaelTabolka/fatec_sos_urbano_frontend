import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-admin-register-institutions',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RevealOnScrollDirective],
  templateUrl: './admin-register-institutions.component.html',
  styleUrl: './admin-register-institutions.component.css'
})
export class AdminRegisterInstitutionsComponent {

}
