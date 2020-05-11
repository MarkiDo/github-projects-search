import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ReposServiceService } from './repos-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl = new FormControl('');
  repos;
  icon: string;
  currentRoute: any;
  languages: any;
  filteredRepos: any;
  reposToFilter: any;
  constructor(private reposService: ReposServiceService, private router: Router) { }

  ngOnInit() {
    this.icon = "../../assets/add.svg";
    this.currentRoute = this.router.url;
    this.searchControl.valueChanges.pipe(debounceTime(1000)).subscribe(arg => arg ? this.getRepos(arg) : console.log('not data'));

  }

  getRepos(keyword: string) {
    this.reposService.getRepos(keyword).subscribe(reposList => {
      if (reposList) {
        this.repos = reposList.items;
        this.filteredRepos = [...this.repos]
        this.languages = new Set();
        this.repos.forEach(repo => this.languages.add(repo.language));
        this.languages = Array.from(this.languages);
      }
    })
  }

  filterBy(language) {
    this.filteredRepos = [];
    this.filteredRepos = this.repos.filter(repo => repo.language === language)
  }

}
