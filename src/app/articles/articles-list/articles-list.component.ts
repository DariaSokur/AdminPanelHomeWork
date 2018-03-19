import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe(data => this.articles = data);
  }
}
