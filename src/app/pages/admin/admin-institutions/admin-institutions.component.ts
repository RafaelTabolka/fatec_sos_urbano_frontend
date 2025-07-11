import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-admin-institutions',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RevealOnScrollDirective],
  templateUrl: './admin-institutions.component.html',
  styleUrl: './admin-institutions.component.css'
})
export class AdminInstitutionsComponent {

}
