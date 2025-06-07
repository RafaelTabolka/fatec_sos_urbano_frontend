import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../../../components/sidebar-admin/sidebar-admin.component";

@Component({
  selector: 'app-admin-manage-incidents',
  standalone: true,
  imports: [SidebarAdminComponent],
  templateUrl: './admin-manage-incidents.component.html',
  styleUrl: './admin-manage-incidents.component.css'
})
export class AdminManageIncidentsComponent {

}
