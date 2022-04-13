import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems = [
    {title: 'Authorization', link: '/auth', icon: 'login'},
    {title: 'Currency converter', link: '/currency', icon: 'paid'},
    {title: 'Editable table', link: '/editable-table', icon: 'view_list'},
    {title: 'Search in GitHub', link: '/github-search', icon: 'search'},
    {title: 'Kanban', link: '/kanban', icon: 'view_kanban'},
  ];

}
