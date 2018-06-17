import { NavigationService } from './../../service/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  links: { title: string, link: string }[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.links = [];
    this.links.push({title: 'Dashboard', link: '/dashboard' });
    this.links.push({title: 'Product list', link: '/products/list' });
    this.links.push({title: 'Product details: Smart watch DZ09', link: '/products/list/details/1000' });
  }

}
