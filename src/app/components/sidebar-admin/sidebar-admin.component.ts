import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.css'
})
export class SidebarAdminComponent {
  active = {
    'background-color': '#84CCF4',
    'color': '#292727',
    'border-radius': '8px 0px 0px 8px',
    'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  }

  constructor(public route: Router) {}

  AddActive(): boolean {
    return this.route.url === '/admin-register-institutions' || this.route.url === '/admin-register-institutions' || this.route.url === '/admin-institutions'
  }

  RemoveIconFunnel(): boolean {
    return this.route.url === '/admin-register-institutions'
  }
}
