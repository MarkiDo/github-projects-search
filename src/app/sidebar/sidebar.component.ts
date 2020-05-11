import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  routes: any;
  urls: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.config.forEach(route => {
      if (route.children) {
        this.urls = route.children.map(child => child.path);
      }
    })
    this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.routes = this.urls.map(routeUrl => route.urlAfterRedirects.includes(routeUrl) ? { url: routeUrl, isActive: true } : { url: routeUrl, isActive: false })
      }
    })
  }

}
