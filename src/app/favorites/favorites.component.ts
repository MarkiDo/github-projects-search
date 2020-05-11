import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  repos: any;
  currentRoute: any;
  isAuth: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.repos = JSON.parse(localStorage.getItem('favorites'));
    this.isAuth = localStorage.getItem('password')? true: false;
    this.currentRoute = this.router.url;
  }

  removeElement(id) {
    this.repos = this.repos.filter(element => element.id !== id);
  }
}
