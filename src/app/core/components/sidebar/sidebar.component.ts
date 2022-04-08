import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItems = [
    {title: 'Authorization', link: '/auth'},
    {title: 'Currency converter', link: '/currency'},
    {title: 'Editable table', link: '/editable-table'},
    {title: 'Search in GitHub', link: '/github-search'},
  ];

}
