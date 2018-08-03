import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  mainMenu: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.mainMenu = [];
    this.mainMenu.push({id: 'dashboard', title: 'Dashboard', action: '/dashboard', roles: [], subMenu: []});
    this.mainMenu.push({id: 'products', title: 'Products', action: '/products', roles: [], subMenu: []});
    this.mainMenu.push({id: 'orders', title: 'Orders', action: '/orders', roles: [], subMenu: []});
    this.mainMenu.push({id: 'customers', title: 'Customers', action: '/customers', roles: [], subMenu: []});
  }

}
