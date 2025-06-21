import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../../../components/sidebar-admin/sidebar-admin.component";
import { RevealOnScrollDirective } from '../../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-admin-manage-incidents',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './admin-manage-incidents.component.html',
  styleUrl: './admin-manage-incidents.component.css'
})
export class AdminManageIncidentsComponent {

}
