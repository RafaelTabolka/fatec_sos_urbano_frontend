import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../../../components/sidebar-admin/sidebar-admin.component";

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [SidebarAdminComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {

}
