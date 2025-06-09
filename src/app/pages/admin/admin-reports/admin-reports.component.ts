import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../../../components/sidebar-admin/sidebar-admin.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [SidebarAdminComponent, FooterComponent],
  templateUrl: './admin-reports.component.html',
  styleUrl: './admin-reports.component.css'
})
export class AdminReportsComponent {

}
