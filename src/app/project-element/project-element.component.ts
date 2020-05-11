import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent implements OnInit {

  @Input() project;
  @Input() route;
  @Output() removedProject:EventEmitter<any> = new EventEmitter();
  icon: string;
  isFavoriteRoute: boolean;
  constructor() { }

  ngOnInit() {
    this.icon = "../../assets/add.svg";
    this.isFavoriteRoute = this.route.includes('favorites') ? true : false;
  }

  addFavorite() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      const newlist = JSON.parse(favorites);
      if (newlist.every(favorite => favorite.id !== this.project.id)) {
        newlist.push(this.project);
        localStorage.setItem('favorites', JSON.stringify(newlist));
      }
    } else {
      localStorage.setItem('favorites', JSON.stringify([this.project]));
    }
  }

  removeFavorite() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      let newlist = JSON.parse(favorites);
      newlist = newlist.filter(repo => repo.id !== this.project.id);
      localStorage.setItem('favorites', JSON.stringify(newlist));
      this.removedProject.emit(this.project.id);
    }
  }
}
