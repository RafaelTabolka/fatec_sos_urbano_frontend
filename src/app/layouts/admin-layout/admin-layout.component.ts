import { Component } from '@angular/core';
import { SidebarAdminComponent } from "../../components/sidebar-admin/sidebar-admin.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SidebarAdminComponent, RouterOutlet, FooterComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
